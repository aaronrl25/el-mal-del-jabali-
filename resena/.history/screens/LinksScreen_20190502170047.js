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

<Image

  source={{
    uri: 'https://firebasestorage.googleapis.com/v0/b/el-mal-del-jabali.appspot.com/o/Xilaquili%20Agua%20gratis.png?alt=media&token=63acabcc-dabd-464e-8757-d14563179482',
  }}
 
  style={{ width: 350,
    height: 400,
    resizeMode: 'contain'}}
    
/>
<Image
  source={{
    uri:'https://firebasestorage.googleapis.com/v0/b/el-mal-del-jabali.appspot.com/o/Xilaquili%20Cupon%20Chilaquiles.png?alt=media&token=dd6ab7aa-853d-42e5-93c8-8619cbe76f3e'
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
  },
});
