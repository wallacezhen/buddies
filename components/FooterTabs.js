import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text, Icon } from 'native-base';
import { StyleSheet } from 'react-native';
import { ContentLoader } from './ContentLoader';

export class FooterTabs extends Component {
  constructor(props){
    super(props);
    this.state = {
      contentSelected: 'home'
    };
  }
  
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Text style={styles.headerText} > Buddies </Text>
        </Header>
        <ContentLoader contentSelected={this.state.contentSelected} />
        <Footer>
          <FooterTab style={styles.theme}>
            <Button active={this.state.contentSelected === 'home'} 
              onPress={() => this.setState({contentSelected: 'home'})}>
              <Icon name='home'/>
            </Button>
            <Button active={this.state.contentSelected === 'fav'} 
              onPress={() => this.setState({contentSelected: 'fav'})}>
              <Icon name='heart'/>
            </Button>
            <Button active={this.state.contentSelected === 'create'} 
              onPress={() => this.setState({contentSelected: 'create'})}>
              <Icon name='md-add-circle'/>
            </Button>
            <Button active={this.state.contentSelected === 'message'} 
              onPress={() => this.setState({contentSelected: 'message'})}>
              <Icon name='chatboxes'/>
            </Button>
            <Button active={this.state.contentSelected === 'profile'} 
              onPress={() => this.setState({contentSelected: 'profile'})}>
              <Icon name='person'/>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 35,
  },
  shadow: {
    backgroundColor: '#555',
  }
});