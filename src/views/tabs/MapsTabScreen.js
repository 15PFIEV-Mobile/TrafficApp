import React, { Component } from 'react';
import {Container,Text,Content,Icon} from 'native-base';
import Header from '../../components/Header';
import MapView, { PROVIDER_GOOGLE, Marker, MyCustomMarkerView, Circle } from 'react-native-maps';
import { View, StyleSheet, Image } from 'react-native'

export default class MapsTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            markers: [
                {
                    coordinate: {
                        latitude: 37.78825,
                        longitude: -122.4324,
                    },
                },
                {
                    coordinate: {
                        latitude: 39.78825,
                        longitude: -102.4324,
                    },
                }
            ]
        };
    }; 
    static navigationOptions = {
        tabBarIcon: ({tintColor})=>{
            return <Icon name='ios-map' style={{color : tintColor}}/>
        },
    }
      
    render() {
    return (
        <View style={styles.container}>
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={this.state.region}
        >
        {this.state.markers.map(marker => (
            <Marker
            coordinate={marker.coordinate}
            // title={marker.title}
            // description={marker.description}
            >
                <Image source={require('../../assets/images/Red_Circle_full.png')} style={{height: 35, width:35, opacity: 0.2 }} />
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
