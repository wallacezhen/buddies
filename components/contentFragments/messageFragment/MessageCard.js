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

// import { AttendeeProfilePics } from '../threadList/AttendeeProfilePics';

export class MessageCard extends Component {
    render() {
        var messageData = this.props.data;

        return (
            // <TouchableHighlight>
            //     <Card>
            //         <CardItem>
            //             <Body style={{flex: 4}}>
            //                 <Text style={styles.itemTitle}>{messageData.first_name}</Text>
            //                 <View style={{padding:4}}>
            //                     <View style={{flexDirection: 'row'}}>
            //                         <Icon name='map' style={{fontSize: 17}}/>
            //                         <Text style={styles.itemLocation}>{messageData.last_name}</Text>
            //                     </View>
            //                     <View style={{flexDirection: 'row'}}>
            //                         <Icon name='clock' style={{fontSize: 17}}/>
            //                         <Text style={styles.itemTime}>{messageData.time}</Text>
            //                     </View>
            //                 </View>
            //             </Body>

            //             <Icon name="bookmark"/>
            //             <Right style={{flex: 3, flexDirection: 'row', justifyContent: 'flex-end'}}>
            //                 <Image style={{width: 50, height: 50, borderRadius: 5, margin: 2}} source={{uri:messageData.profilePic}} rounded/>
            //             </Right>
            //         </CardItem>
            //     </Card>
            // </TouchableHighlight>

            <TouchableHighlight>
                <View style={{ alignItems:'center', padding:10, flexDirection:'row', borderBottomWidth:1, borderColor:'#f7f7f7' }}>
                    <Image style={{width: 50, height: 50, borderRadius: 5, margin: 2}} source={{uri:messageData.profilePic}} rounded/>
                    <View>
                        <View style={{ flexDirection:'row', justifyContent:'space-between', width:280 }}>
                        <Text style={{ marginLeft:15, fontWeight:'600' }}>{messageData.first_name} {messageData.last_name}</Text>
                        <Text style={{ color:'#333', fontSize:10 }}>{messageData.time}</Text>
                        </View>
                        <View style={{ flexDirection:'row', alignItems:'center' }}>
                        <Text style={{ fontWeight:'400', color:'#333', marginLeft:15 }}>{messageData.message}</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
        }
}

const styles = StyleSheet.create({
  itemTitle: {
    fontSize: 20,
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