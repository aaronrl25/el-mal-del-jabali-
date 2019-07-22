import { MapView } from 'expo';
import { AppRegistry, StyleSheet, Dimensions, View} from "react-native";
import { Marker } from 'react-native-maps';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import MapContainer from './containers/map-container';

class MyLocation  extends Component{

  render() {
    return (
      <View style={styles.container}>
        <MapContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
});
