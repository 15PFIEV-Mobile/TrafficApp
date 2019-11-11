import React, { Component } from 'react';
import {Container,Icon, Content} from 'native-base';
import {StyleSheet,View} from 'react-native'
import Header from '../../components/Header'
import StreamCard from "../../components/StreamCard"

export default class StreamTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor})=>{
            return <Icon name='ios-videocam' style={{color : tintColor}}/>
        }
    }
    render() {
        return <Container>
            <Header/>
            <Content>
                <StreamCard/>
                <StreamCard/>
                <StreamCard/>
            </Content>
        </Container>
    }
}
