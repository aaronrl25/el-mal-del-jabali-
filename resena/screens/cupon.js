import React from 'react';
import { ScrollView, StyleSheet,Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
export default class cupon extends React.Component {
  
  render() {
    return (
      <ScrollView style={styles.container}>
<Image
  source={{
    uri: 'https://firebasestorage.googleapis.com/v0/b/el-mal-del-jabali.appspot.com/o/cupon.png?alt=media&token=9c8e5eeb-1fe7-4771-b422-6f158d829f35',
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
