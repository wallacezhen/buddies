import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Tabs, Tab } from 'native-base';
import { FavTab } from './FavTab';

export class FavFragment extends Component {
  
  render() {
    return (
      <Container>
        <Tabs initialPage={0}>
          <Tab heading="Going">
            <FavTab heading="Going"/>
          </Tab>
          <Tab heading="Saved">
            <FavTab heading="Saved"/>
          </Tab>
          <Tab heading="Friends">
            <FavTab heading="Friends"/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}