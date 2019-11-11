import React, { Component } from 'react';
import { Image } from 'react-native';
import {Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, H1} from 'native-base';
export default class StreamCard extends Component {
  render() {
    return (
        <Card>
            <CardItem>
                <Left>
                <Thumbnail source={{uri: 'https://www.pngarts.com/files/3/Avatar-PNG-Image.png'}} />
                <Body>
                    <Text>NativeBase</Text>
                    <Text note>GeekyAnts</Text>
                </Body>
                </Left>
            </CardItem>
            <CardItem cardBody>
                <Image source={{uri: 'https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
                <Left>
                <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>12 Likes</Text>
                </Button>
                </Left>
                <Body>
                <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>4 Comments</Text>
                </Button>
                </Body>
                <Right>
                <Text>11h ago</Text>
                </Right>
            </CardItem>
        </Card>
    );
  }
}