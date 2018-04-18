/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Text,
  View
} from 'react-native';
var ImagePicker = require('react-native-image-picker');

import {readerQR} from 'react-native-lewin-qrcode'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  openPhoto(){
    console.log('ImagePicker');
    ImagePicker.launchImageLibrary({}, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        if(response.uri){
          var path = response.path;
          if(!path){
              path = response.uri;
          }
          readerQR(path).then((data)=>{
              Alert.alert('识别结果',data);
          }).catch((err)=>{
            Alert.alert('识别失败');
          });
          
      }
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Lewin QRCODE!
        </Text>
        <TouchableOpacity onPress={()=>{
          this.openPhoto();
        }}>
          <Text style={{marginTop: 20}}>打开相册识别二维码</Text>
        </TouchableOpacity>

        
      </View>
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
});
