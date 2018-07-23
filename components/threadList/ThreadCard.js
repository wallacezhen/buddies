import React, { Component } from 'react';
import { 
  Container, 
  Header, 
  Content, 
  Footer, 
  FooterTab, 
  Button, 
  Text, 
  Icon,
  Card,
  List,
  CardItem,
  Right,
  Left,
  Body,
} from 'native-base';

import {
  StyleSheet,
  FlatList,
  View,
  Image,
  TouchableNativeFeedback,
  TouchableHighlight,
} from 'react-native';

import { AttendeeProfilePics } from './AttendeeProfilePics';

export class ThreadCard extends Component {

  hey() {
  }
  render() {
      var threadData=this.props.data;
      
      return (
        <TouchableHighlight >
          <Card onPress={this.hey()}>
              <CardItem>
                <Body style={{flex: 4}}>
                  <Text style={styles.itemTitle}>{threadData.title}</Text>
                  <View style={{padding:4}}>
                    <View style={{flexDirection: 'row'}}>
                    <Icon name='map' style={{fontSize: 17}}/>
                    <Text style={styles.itemLocation}>{threadData.location}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                    <Icon name='clock' style={{fontSize: 17}}/>
                    <Text style={styles.itemTime}>{threadData.time}</Text>
                    </View>
                  </View>
                </Body>

                <Icon name="bookmark" />
                <Right style={{flex: 3, flexDirection: 'row', justifyContent: 'flex-end'}}> 
                  <AttendeeProfilePics profilePics={threadData.profilePics}/>
                </Right>
              </CardItem>
          </Card>
        </TouchableHighlight>
      );
    }
}

const styles = StyleSheet.create({
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
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemLocation: {
    fontSize: 15,
    color: '#aaa',
    left: 8,
  },
  itemTime: {
    fontSize: 15,
    color: '#aaa',
    left: 8,
  },
  itemDescription: {

  },
  bookmark: {
    backgroundColor: '#fff',
  }
});