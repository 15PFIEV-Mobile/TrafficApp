import React, { Component } from 'react';
import {Container,Text,Content,Icon} from 'native-base';

export default class StreamTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor})=>{
            return <Icon name='ios-videocam' style={{color : tintColor}}/>
        }
    }
    render() {
        return <Container>
            <Content>
                <Text>
                    List
                </Text>
            </Content>
        </Container>
    }
}
