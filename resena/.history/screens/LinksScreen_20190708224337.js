import React from 'react';
import { ScrollView, StyleSheet,Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Cupones',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>


      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
