import React, { Component } from 'react';
import {Container,Text,Content,Icon} from 'native-base';

export default class MapsTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor})=>{
            return <Icon name='ios-map' style={{color : tintColor}}/>
        }
    }
    render() {
        return <Container>
            <Content>
                <Text>
                    Maps
                </Text>
            </Content>
        </Container>
    }
}
