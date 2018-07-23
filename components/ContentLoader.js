import React, { Component } from 'react';

import { HomeFragment }from './contentFragments/homeFragment/HomeFragment'
import { FavFragment }from './contentFragments/favFragment/FavFragment'
import { CreateFragment } from './contentFragments/createFragment/CreateFragment'
import { MessageFragment } from './contentFragments/messageFragment/MessageFragment'
import { ProfileFragment } from './contentFragments/profileFragment/ProfileFragment'

export class ContentLoader extends Component {

    render() {
        switch (this.props.contentSelected) {           
            case 'fav':
                return (
                    <FavFragment/>
                );     
            case 'create':
                return (
                    <CreateFragment/>
                );
            case 'message':
                return (
                    <MessageFragment/>
                );
            case 'profile':
                return (
                    <ProfileFragment/>
                );      
            default: 
                return (
                    <HomeFragment/>
                );
        }

    }
}