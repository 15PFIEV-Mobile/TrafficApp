import React, { Component } from 'react';
import {Container,Text,Content,Icon} from 'native-base';
import Header from '../../components/Header';
import MapView, { PROVIDER_GOOGLE, Marker, MyCustomMarkerView, Circle } from 'react-native-maps';
import { View, StyleSheet, Image } from 'react-native'
import {firebaseApp} from '../../components/FirebaseConfig'

export default class MapsTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 39.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            markers: [
                {
                    coordinate: {
                        latitude: 39.76825,
                        longitude: -122.4324,
                    },
                },
                {
                    coordinate: {
                        latitude: 39.78825,
                        longitude: -122.4124,
                    },
                }
            ],
            mark: [{
                latitude: 0,
                longitude: 0,
                total: 0
            }]
        };
        this.item = firebaseApp.database().ref('location');
    };
    static navigationOptions = {
        tabBarIcon: ({tintColor})=>{
            return <Icon name='ios-map' style={{color : tintColor}}/>
        },
    }
    componentDidMount(){
        let results=[];
        this.item.on("child_added", (snapshot) => {
            results.push({
                latitude: snapshot.val().latitude,
                longitude: snapshot.val().longitude,
                total: snapshot.val().total,
            });
            this.setState({
                mark: results
            })
        });
        
    } 
      
    render() {
        const mark = this.state.mark
        console.log(mark)
        return (
        <View style={styles.container}>
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={this.state.region}
        >
        {/* {this.state.markers.map(marker => (
            <Marker
            coordinate={marker.coordinate}
            // title={marker.title}
            // description={marker.description}
            >
                <Image source={require('../../assets/images/Red_Circle_full.png')} style={{height: 35, width:35, opacity: 0.2 }} />
            </Marker>
        ))} */}
        <Marker
            coordinate = {{
                latitude: mark[0].latitude, 
                longitude: mark[0].longitude
            }}
            // title={marker.title}
            // description={marker.description}
            >
                <Image source={require('../../assets/images/Red_Circle_full.png')} style={{height: 35, width:35, opacity: 0.2 }} />
            </Marker>
        </MapView>
        </View>
    );
    }
}
const styles = StyleSheet.create({
    container: { ... StyleSheet.absoluteFillObject },
    map: { ...StyleSheet.absoluteFillObject }
  })
