import React, { Component } from 'react';
import { Image } from 'react-native';
import {Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, H1} from 'native-base';
import StreamFrame from './StreamFrame';

export default class StreamCard extends Component {
    state = {
        isWatched : false,
    }

    updateWatched = () => {
        this.setState({
            isWatched : !this.state.isWatched
        })
    }

    render() {
        const btnWatch = this.state.isWatched?
            <Button iconLeft danger rounded onPress={this.updateWatched}>
                <Icon name='arrow-dropup-circle'/>
                <Text>Close</Text>
            </Button>:
            <Button iconLeft rounded onPress={this.updateWatched}>
                <Icon name='arrow-dropdown-circle'/>
                <Text>Watch</Text>
            </Button>

        const fStream = this.state.isWatched?
            <StreamFrame frame={this.props.frame} keyid={this.props.id}/>:
            <CardItem cardBody>
                <Image source={{uri: 'data:image/jpeg;base64,'+this.props.frame}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>

        return (
            <Card>
                <CardItem>
                    <Left>
                    <Thumbnail source={{uri: 'https://www.pngarts.com/files/3/Avatar-PNG-Image.png'}} />
                    <Body>
                        <Text>User Name</Text>
                        <Text note>{this.props.id}</Text>
                    </Body>
                    </Left>
                    <Right>
                    {btnWatch}
                    </Right>
                </CardItem>
                {fStream}
                <CardItem>
                    <Left>
                    <Button transparent>
                        <Icon active name="thumbs-up" />
                        <Text>{this.props.likes} Likes</Text>
                    </Button>
                    </Left>
                    <Body>
                    <Button transparent>
                        <Icon active name="chatbubbles" />
                        <Text>{this.props.comments} Comments</Text>
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