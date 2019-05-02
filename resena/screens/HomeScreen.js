import React, { Component } from "react";
import { MapView } from 'expo';
import { AppRegistry, StyleSheet, Dimensions, View} from "react-native";
import { Marker } from 'react-native-maps';
class MyLocation  extends Component{
  constructor(props){
    super(props);
    this.state=
    {
      latitude: null,
      longitude: null,
      error: null,
    };
  }
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
       (position) => {
         console.log(position);
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null
         });
       },
       (error)=> this.setState({error:error.message}),
       { enableHighAccuracy:true,timeout:100000,maximumAge:10},
        );
         }
  render() {
    return (
    <MapView
          style={{flex:1}}
          initialRegion={{
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          latitudeDelta: 0.09220,
          longitudeDelta: 0.0421,
        
          mapType:"Current location status",
          loadingInitialColor:"red",
          toolbarEnabled: 1,
        }}> 
    </MapView> 
    );
  }
}
export default MyLocation