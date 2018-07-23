import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text, Icon, View } from 'native-base';
import { FormLabel, FormInput } from 'react-native-elements';

export class CreateFragment extends Component {
  
  render() {
    return (
      <Container>

        <Header/>

        <Content>
          <View  style={{padding:10}}>
            <FormLabel>Event Host</FormLabel>
            <FormInput value="Wallace"/>

            <FormLabel>Event Name</FormLabel>
            <FormInput/>

            <FormLabel>Description</FormLabel>
            <FormInput/>

            <FormLabel>When</FormLabel>
            <FormInput/>

            <FormLabel>Where</FormLabel>
            <FormInput/>
          </View>

          <View  style={{padding:50}}>
            <Button block>
              <Text> Create Thread </Text>
            </Button>
          </View>
        </Content>

      </Container>
    );
  }
}