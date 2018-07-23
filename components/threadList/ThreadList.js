import React, { Component } from 'react';
import {
  FlatList,
} from 'react-native';
import { ThreadCard } from './ThreadCard';


export class ThreadList extends Component {
  render() {
        var threadListData = this.props.threadListData;
        return (
            <FlatList
                data={threadListData}
                renderItem={({item}) => 
                    <ThreadCard data={item}/>
                }/>
        );
    }
}
