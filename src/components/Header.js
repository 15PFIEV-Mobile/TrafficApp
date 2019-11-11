import React, { Component } from 'react';
import {Header, Left,Right, Button, Icon, Title } from 'native-base';
export default class HeaderExample extends Component {
  render() {
    return (
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Right>
            <Button transparent>
                <Title>BCD TEAM</Title>
            </Button>
          </Right>
        </Header>
    );
  }
}