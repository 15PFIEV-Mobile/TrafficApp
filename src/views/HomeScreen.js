import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content, Text } from 'native-base';
export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header hasSegment>
          <Body>
            <Title>Home</Title>
          </Body>
        </Header>
        <Segment>
            <Button first active>
                <Text>Maps</Text>
            </Button>
            <Button last>
                <Text>Streams</Text>
            </Button>
        </Segment>
        <Content padder>
          <Text>Màn hình list stream</Text>
        </Content>
      </Container>
    );
  }
}