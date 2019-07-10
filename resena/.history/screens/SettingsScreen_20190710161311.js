import React from 'react';
import { ScrollView, StyleSheet,Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import {WebView} from 'react-native';
export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Reseñas',
  };

  render() {
    return (
 <WebView
        source={{uri: 'https://maldeljabali.com/blog-app/'}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
