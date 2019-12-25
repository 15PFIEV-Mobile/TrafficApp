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
                latitude: 16.0586752,
                longitude: 108.1873099,
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
                total: 0,
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
                keyid: snapshot.key
            });
            this.setState({
                mark: results
            })
            console.log(this.state.mark);
        });
        this.item.on("value", (snapshot) => {
            console.log(snapshot.val().Pao)
            // results = results.filter((x)=>(x.keyid==snapshot.key)&&(x.total=snapshot.val().total))
            results[0] = snapshot.val().Pao
            this.setState({
                mark :results,
            })
            console.log(this.state.mark);
        });
        
    } 
      
    render() {
        const mark = this.state.mark
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
        {this.state.mark.map(point => (
        <Marker
            coordinate = {{
                latitude: point.latitude, 
                longitude: point.longitude
            }}
            // title={marker.title}
            // description={marker.description}
            >
                <Image source={require('../../assets/images/Red_Circle_full.png')} style={{height: 30, width: 30, opacity: 0.05*point.total }} />
            </Marker>
        ))}
        </MapView>
        </View>
    );
    }
}
const styles = StyleSheet.create({
    container: { ... StyleSheet.absoluteFillObject },
    map: { ...StyleSheet.absoluteFillObject }
  })
