import React, { Component } from 'react';
import {Container,Text,Button, Icon} from 'native-base';
import Header from '../../components/Header';
import {StyleSheet, View} from 'react-native';
//import CameraRoll from "@react-native-community/cameraroll";
import { RNCamera } from 'react-native-camera';

export default class RecorderScreen extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor})=>{
            return <Icon name='recording' style={{color : tintColor}}/>
        }
    }

    state = {
        recording: false,
        processing: false,
        interval : 0,
    }

    takePicture = async() => {
        if (this.camera) {
          const options = { quality: 0.25, base64: true };
          const data = await this.camera.takePictureAsync(options);
          console.log(data.uri);
          //const result = data.base64; //ready for store base64
        }
    };

    changeRecording = async () => {
        await this.setState({
            recording: !this.state.recording
        })
        console.log('change to '+this.state.recording)
    }

    startRecording = async () =>{
        await this.changeRecording()
        console.log('start')
        //this.takePicture()
        await this.setState({
            intervalID : setInterval(()=>console.log('Live...'),2000)
        })
        console.log(this.state.intervalID)
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
                        <Icon name='wifi' />
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
