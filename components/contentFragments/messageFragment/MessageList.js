import React, { Component } from 'react';
import {
  FlatList,
} from 'react-native';
import { MessageCard } from './MessageCard';


export class MessageList extends Component {
  render() {
        var messageListData = this.props.data;

        return (
            <FlatList
                data={messageListData}
                renderItem={({item}) => 
                    <MessageCard data={item}/>
                }/>
        );
    }
}
