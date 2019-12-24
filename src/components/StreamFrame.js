import React, { Component } from 'react';
import { Image } from 'react-native';
import {CardItem} from 'native-base';
import {firebaseApp} from '../services/ConfigFirebase';

export default class StreamFrame extends Component {
    
    state={
        frame : this.props.frame
    }

    constructor(props){
        super(props)
        this.itemsRef = firebaseApp.database().ref('Streams').child(this.props.keyid.toString())
    }

    componentDidMount(){
        this.itemsRef.on('value',(dataSnapshot)=>{
            this.setState({
                frame : dataSnapshot.val().frame
            })
        })

    }


    render() {
        return <CardItem cardBody>
            <Image source={{uri: 'data:image/jpeg;base64,'+this.state.frame}} style={{height: 500, width: null, flex: 1}}/>
        </CardItem>
    }
}