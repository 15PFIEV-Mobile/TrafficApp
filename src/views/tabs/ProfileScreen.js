import React, { Component } from 'react';
import {Container,Text,Content,Icon} from 'native-base';

export default class ProfileTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor})=>{
            return <Icon name='ios-contact' style={{color : tintColor}}/>
        }
    }
    render() {
        return <Container>
            <Content>
                <Text>
                    Profile
                </Text>
            </Content>
        </Container>
    }
}
