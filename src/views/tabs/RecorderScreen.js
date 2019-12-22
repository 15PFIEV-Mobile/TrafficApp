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
        processing: false
    }

    takePicture = async() => {
        if (this.camera) {
          const options = { quality: 0.5, base64: true };
          const data = await this.camera.takePictureAsync(options);
          console.log(data.uri);
        }
    };

    render() {

        const { recording, processing } = this.state;

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
                onGoogleVisionBarcodesDetected={({ barcodes }) => {
                    console.log(barcodes);
                }}
                />
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <Button onPress={this.takePicture.bind(this)} style={styles.capture} rounded warning>
                    <Text>Snap</Text>
                </Button>
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
      margin: 20,
    },
});
