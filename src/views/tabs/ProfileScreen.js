import React, { Component } from 'react';
import {Container,Text,Content,Icon} from 'native-base';
import Header from '../../components/Header'

export default class ProfileTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor})=>{
            return <Icon name='ios-contact' style={{color : tintColor}}/>
        }
    }
    render() {
        return <Container>
                <Header/>
        </Container>
    }
}
