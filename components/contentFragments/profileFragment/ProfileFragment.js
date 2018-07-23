import React, { Component } from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Text, Icon, View } from 'native-base';

export class ProfileFragment extends Component {
  
  render() {
    return (
      <Container>
        <View> 
          <ScrollView automaticallyAdjustContentInsets={false} style={styles.scrollView}>
            <View style={styles.meInfoWrap}>
              <View style={styles.meData}>
                <View style={styles.data}>
                  <Text style={{fontWeight:'bold'}}>22</Text>
                  <Text style={{fontSize:12, color:'#777'}}>Went</Text>
                </View>
                <View style={styles.data}>
                  <Text style={{fontWeight:'bold'}}>204</Text>
                  <Text style={{fontSize:12, color:'#777'}}>Going</Text>
                </View>
                <View style={styles.data}>
                  <Text style={{fontWeight:'bold'}}>22</Text>
                  <Text style={{fontSize:12, color:'#777'}}>Buddies</Text>
                </View>
              </View>
              <View style={styles.edit}>
                <Text>Edit Profile</Text>
              </View>
              <View style={styles.meInfo}>
                <Image source={{uri:'https://s12.favim.com/orig/160130/contour-eyebrows-flawless-girl-Favim.com-3944947.jpg'}} style={styles.mePic}/>
              </View>

              <View style={styles.row}>
                <Text style = {{fontSize:19, fontWeight:'400'}}>Walla</Text>
                <Text style = {{fontSize:15, fontWeight:'400', paddingHorizontal:5, paddingVertical:2}}>(walla1234)</Text>
              </View>
              <View style={styles.row}>
                <Text style={{color:'#444', fontSize:15}}>Unappers Creative</Text>
              </View>
              <View style={styles.row}>
                <Text style={{color:'#777', fontSize:11}}>less than a mile away</Text>
              </View>
              <View style={styles.description}>
                <Text style={{color:'#555'}}>Party animal, also appreciate a chill afternoon in a local bookstore</Text>
              </View>
              <View style ={styles.commons}>
                <Text style = {styles.title}>Interests</Text>
                {/* <View style={styles.interestBubble}>
                    <Text style={styles.interest}>Edit Profile</Text>
                </View> */}
                <View style={styles.interestWrap}>
                  <Text style={styles.interest}>* Party</Text>
                  <Text style={styles.interest}>* BookStore</Text>
                  <Text style={styles.interest}>* Creative</Text>
                  <Text style={styles.interest}>* Local</Text>
                  <Text style={styles.interest}>* Chill</Text>
                </View>
              </View>
            </View>

          </ScrollView>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  scrollView:{
    backgroundColor: '#fff',
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
  mePic:{
      width:130,
      height:130,
      borderRadius:15
  },
  meInfoWrap:{
    paddingTop:5,
  },
  meData:{
    flex:2,
    paddingTop:20,
    flexDirection:'row',
  },
  meInfo:{
    alignItems:'center',
    padding:5
  },
  meName:{
    fontWeight:'bold',
    fontSize:12,
    paddingTop:10
  },
  data:{
    flex:1,
    alignItems:'center'
  },
  edit:{
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius:3,
    alignItems:'center',
    margin:15,
    padding:2
  }, 
  row: {
    flexDirection:'row',
    margin:15,
    marginBottom:0,
    marginTop:5,
    alignItems:'flex-end'
  },
  title:{
  },
  commons:{
    paddingHorizontal:15
  },
  buttons:{
    width:80, 
    height:80, 
    borderWidth:10, 
    borderColor:'#e7e7e7', 
    justifyContent:'center', 
    alignItems:'center',
    borderRadius:40
  },
  description:{
    padding:15,
    borderTopWidth:1,
    borderBottomWidth:2,
    borderColor:'#e3e3e3',
    marginTop:10,
    marginBottom:10
  },
  buttonSmall:{
    width:50, 
    height:50, 
    borderWidth:10, 
    borderColor:'#e7e7e7', 
    justifyContent:'center', 
    alignItems:'center',
    borderRadius:25
  },
  interestBubble: {
    borderWidth:1,
    borderColor:'#f00',
    borderRadius:10,
    alignItems:'center',
    margin:15,
    padding:1,
  },
  interestWrap: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  interest: {
    fontSize: 12,
    padding: 2,
  },
});