import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text, Icon } from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  ListView,
  Image,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';
import { MessageList } from './MessageList';

// import renderImages from '../fake/fakeImage';
// import { images, data } from '../fake/fakeChatList';

// const images = R.range(1, 11).map(i => require(`../images/image${i}.jpeg`))
// const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export class MessageFragment extends Component {
  render() {

     var dummyMessageData = [{key: '0', first_name: 'walla1', last_name: 'wallalast', time: '10:10 am', message: 'hey, wyd...', profilePic: 'https://tinypost.co/wp-content/uploads/2016/09/cute-profile-pics-for-whatsapp-images.png'},
      {key: '1', first_name: 'walla2', last_name: 'wallalast', time: '10:10 am', message: 'hey, wyd...', profilePic: 'https://tinypost.co/wp-content/uploads/2016/09/cute-profile-pics-for-whatsapp-images.png'},
      {key: '2', first_name: 'walla3', last_name: 'wallalast', time: '10:10 am', message: 'hey, wyd...', profilePic: 'https://www.leonardmillermd.com/wp-content/uploads/2016/09/September.jpg'},
      {key: '3', first_name: 'walla4', last_name: 'wallalast', time: '10:10 am', message: 'hey, wyd...', profilePic: 'https://assets.entrepreneur.com/content/3x2/1300/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg?width=750&crop=16:9'},
      {key: '4', first_name: 'walla5', last_name: 'wallalast', time: '10:10 am', message: 'hey, wyd...', profilePic: 'https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2015/08/black-and-white-portrait-tips-3201.jpg'},
      {key: '5', first_name: 'walla6', last_name: 'wallalast', time: '10:10 am', message: 'hey, wyd...', profilePic: 'https://i.pinimg.com/736x/47/6c/98/476c989acbaf62850ff67146d0d23b6c--profile-pics-in-love.jpg'},
      {key: '6', first_name: 'walla7', last_name: 'wallalast', time: '10:10 am', message: 'hey, wyd...', profilePic: 'https://i.pinimg.com/736x/14/e0/77/14e0770ffa31872ed50644bf54d165d5--ash-blonde-blonde-hair.jpg'},
      ];

    // console.log(dummyMessageData);
    return (
      <Container>
          <Content>
              <MessageList data={dummyMessageData}/>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  filterButton: {
    backgroundColor: '#ddd',
    position: 'absolute',
    bottom: 20,
    right: 75
  },
  mapButton: {
    backgroundColor: '#ddd',
    position: 'absolute',
    bottom: 20,
    right: 20
  },
});