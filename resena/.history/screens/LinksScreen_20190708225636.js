import React from 'react';
import { ScrollView, StyleSheet,Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import {WebView} from 'react-native';
export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Cupones',
  };
  render() {
    return (
      <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
      />
    );
  }
}
   

const styles = StyleSheet.create({
  container: {
  },
});
