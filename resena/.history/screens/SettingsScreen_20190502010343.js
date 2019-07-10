import React from 'react';
import { ScrollView, StyleSheet,Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Reseñas',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
<Image
  source={{
    uri: 'https://maldeljabali.com/wp-content/uploads/2019/04/Xilaquile-Restaurante-Mal-del-Japali.png',
  }}
  style={{ width: 350,
    height: 400,
    resizeMode: 'contain'}}
/>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
