import React, { Component } from 'react';
import {
    View,
    Image,
    FlatList,
    StyleSheet,
} from 'react-native'
import { 
    Container, 
    Content, 
    Text, 
    Icon,
    Card,
    CardItem,
    Right,
    Left,
    Body,
    Tab,
} from 'native-base';
import { ThreadList } from '../../threadList/ThreadList';


export class FavTab extends Tab {
  
    render() {
        var dummyData = [
            // , '../../images/don.jpg', '../../images/john.jpg'
            {key: '1', title: 'Coffee Shop', location: 'Bucktown', time: 'Today 11:30pm', profilePics: ['https://tinypost.co/wp-content/uploads/2016/09/cute-profile-pics-for-whatsapp-images.png', 'https://s12.favim.com/orig/160130/contour-eyebrows-flawless-girl-Favim.com-3944947.jpg', 'https://assets.entrepreneur.com/content/3x2/1300/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg?width=750&crop=16:9']},
            {key: '2', title: 'Grocery Buddies', location: 'Bridgeport', time: 'Today 11:30pm', profilePics: ['https://www.leonardmillermd.com/wp-content/uploads/2016/09/September.jpg']},
            {key: '3', title: 'Lunch', location: 'UIC', time: 'Today 11:30pm', profilePics: ['https://assets.entrepreneur.com/content/3x2/1300/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg?width=750&crop=16:9']},
            {key: '4', title: 'Library Book Junky', location: 'UIC', time: 'Today 11:30pm', profilePics: ['https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2015/08/black-and-white-portrait-tips-3201.jpg', 'https://michiganross.umich.edu/sites/default/files/images/profiles/koustav-de.jpg']},
            {key: '5', title: 'House Party Partner', location: 'Wiggly Field', time: 'Today 11:30pm', profilePics: ['https://i2.cdn.turner.com/cnnnext/dam/assets/140926165711-john-sutter-profile-image-large-169.jpg', 'https://i.pinimg.com/736x/60/e0/3b/60e03b25d0829ec560b3f472e84cd23a--profile-picture-ideas-profile-pictures.jpg']},
            {key: '6', title: 'Festival Buddies', location: 'The Bean', time: 'Today 11:30pm', profilePics: ['https://i.pinimg.com/736x/47/6c/98/476c989acbaf62850ff67146d0d23b6c--profile-pics-in-love.jpg']},
            {key: '7', title: 'Tech Talk Buds', location: 'Michigan Ave', time: 'Today 11:30pm', profilePics: ['https://i.pinimg.com/736x/14/e0/77/14e0770ffa31872ed50644bf54d165d5--ash-blonde-blonde-hair.jpg']}
            ];
        var goingData;
        var savedData;
        var friendsData;

        var heading = this.props.heading;
        var threadList;
        switch (heading) {
            case 'Going':
                threadList = dummyData;
                break;
            case 'Saved':
                threadList = dummyData;
                break;
            case 'Friends':
                threadList = dummyData;
                break;
            default:
                threadList = [];
                break;
        }
        
        return (<ThreadList threadListData={threadList}/>);
    }
}

