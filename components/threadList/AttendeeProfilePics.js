import React, { Component } from 'react';
import {
  View,
  Image,
  FlatList,
} from 'react-native'

export class AttendeeProfilePics extends Component {
  
  render() {
    var images = this.props.profilePics.map(function(image) {
      return ({key: image});
      });

    return <FlatList 
      horizontal
      data={images}
      renderItem={({item}) => <Image style={{width: 50, height: 50, borderRadius: 5, margin: 2}} source={{uri:item.key}} rounded/>}
      />;
  }
}