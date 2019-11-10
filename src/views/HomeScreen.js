import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content, Text } from 'native-base';
export default class HomeScreen extends Component {
  state = {
    screen : 'maps'
  }

  changeScreen = (scr) => {
    this.setState({
      screen : scr
    })
  }

  render() {
    screen = this.state.screen==='maps'?'Man hinh maps':'Man hinh streams'
    return (
      <Container>
        <Header hasSegment>
          <Left>
            <Button transparent>
              <Icon type="FontAwesome"></Icon>
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right>
            <Button transparent>
              
            </Button>
          </Right>
        </Header>
        <Segment>
            <Button first active={this.state.screen==='maps'} onPress={(event)=>this.changeScreen('maps')}>
                <Text>Maps</Text>
            </Button>
            <Button last active={this.state.screen==='streams'} onPress={(event)=>this.changeScreen('streams')}>
                <Text>Streams</Text>
            </Button>
        </Segment>
        <Content padder>
          <Text>
            {screen}
          </Text>
        </Content>
      </Container>
    );
  }
}