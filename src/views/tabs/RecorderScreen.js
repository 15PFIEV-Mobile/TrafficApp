import React, { Component } from 'react';
import {Container,Text,Button, Icon} from 'native-base';
import Header from '../../components/Header';
import {StyleSheet, View} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Geolocation from 'react-native-geolocation-service';
import * as Permission from '../../services/Permissions';
import * as connectDB from '../../services/Database';
import * as Distr from '../../services/Distributed';

export default class RecorderScreen extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor})=>{
            return <Icon name='recording' style={{color : tintColor}}/>
        }
    }

    componentDidMount(){
        Permission.requestLocationPermission()
        this.getLocation()
    }

    componentWillUnmount(){
        this.stopRecording()
    }

    state = {
        recording: false,
        processing: false,
        interval : 0,
        location : {},
    }

    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.25, base64: true };
            const data = await this.camera.takePictureAsync(options);
            connectDB.updateDB(data.base64)

            await Distr.sendImage({
                image : data.base
            })
            console.log('live...')
        }
    };

    changeRecording = async () => {
        await this.setState({
            recording: !this.state.recording
        })
        console.log('change to '+this.state.recording)
    }

    startRecording = async () =>{
        connectDB.setDB(this.state.location)
        await this.changeRecording()
        console.log('start')
        this.setState({
            intervalID : setInterval(()=>this.takePicture(),1000)
        })
    }

    getLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    location : position.coords
                })
            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }

    stopRecording = async () =>{
        await this.changeRecording()
        console.log('end')
        clearInterval(this.state.intervalID)
    }

    render() {
        return <Container>
            <Header/>
            <View style={styles.container}>
                <RNCamera
                ref={ref => {
                    this.camera = ref;
                }}
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.off}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                androidRecordAudioPermissionOptions={{
                    title: 'Permission to use audio recording',
                    message: 'We need your permission to use your audio',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                />
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                {this.state.recording?
                    <Button onPress={this.stopRecording} style={styles.capture} rounded iconLeft>
                        <Icon name='wifi' style={styles.iconRecord}/>
                        <Text>Live</Text>
                    </Button>:
                    <Button onPress={this.startRecording} style={styles.capture} rounded>
                        <Icon name='aperture' style={styles.iconRecord}/>
                    </Button>
                }
                </View>
            </View>
        </Container>
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      //padding: 15,
      //paddingHorizontal: 20,
      alignSelf: 'center',
      position: "absolute",
      bottom: 20,
      height: 75,
    },
    iconRecord: {
        fontSize: 50
    }
});
