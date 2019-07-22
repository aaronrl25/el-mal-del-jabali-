import { AppRegistry, StyleSheet, Dimensions, View} from "react-native";
import { Constants } from 'expo';
import MapContainer from '../containers/map-container';
import * as React from 'react';

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
