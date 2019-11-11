import React, { Component } from 'react';
import { Container, Header, Content, Spinner, H1 } from 'native-base';
export default class Welcome extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
            <H1>BCD Team</H1>
            <Spinner color='blue' />
        </Content>
      </Container>
    );
  }
}