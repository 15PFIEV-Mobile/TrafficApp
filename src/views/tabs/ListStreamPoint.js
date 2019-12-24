import React, { Component } from 'react';
import {Container,Icon, Content} from 'native-base';
import {StyleSheet,View} from 'react-native'
import Header from '../../components/Header'
import StreamCard from "../../components/StreamCard"
import {firebaseApp} from '../../services/ConfigFirebase';

export default class StreamTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor})=>{
            return <Icon name='ios-videocam' style={{color : tintColor}}/>
        }
    }

    constructor(props){
        super(props)
        this.itemsRef = firebaseApp.database().ref('Streams')
      }

    state={
        data: []
    }

    componentDidMount(){
        this.getDB()
      }

    getDB = () => {
        let results = [];
        this.itemsRef.on('child_added',(dataSnapshot)=>{
        results.push({
            comments : dataSnapshot.val().comments,
            frame: dataSnapshot.val().frame,
            likes: dataSnapshot.val().likes,
            location: dataSnapshot.val().location,
            keyid: dataSnapshot.key
            })
            this.setState({
                data : results
            })
        })
        this.itemsRef.on('child_removed',(dataSnapshot)=>{
        results = results.filter((x)=>x.keyid !== dataSnapshot.key);
            this.setState({
                data : results
            })
        })
    }

    render() {
        const list = this.state.data.map((item,key)=>{
            return <StreamCard frame={item.frame} comments={item.comments} likes={item.likes} key={key} location={item.location} id={item.keyid}/>
        })
        return <Container>
            <Header/>
            <Content>
                {list}
            </Content>
        </Container>
    }
}
