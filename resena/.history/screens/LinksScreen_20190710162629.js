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
        source={{uri: 'https://maldeljabali.com/cupones/'}}
      />
    );
  }
}
   

const styles = StyleSheet.create({
  container: {
  },
});
