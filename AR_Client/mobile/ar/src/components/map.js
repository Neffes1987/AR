import React from 'react'
import { Component , View, Text, Button,StyleSheet} from 'react-native';
import { Actions } from 'react-native-router-flux';
import MapView from 'react-native-maps';
import Styles from '../Style.js'
import mapStyle from '../styles/mapStyle.js'

const gpsCoords = [
    {
        gps:{
            longitude:40.328996,
            latitude:55.996376
        },
        title:'point1',
        descr:'descrp1'
    },
    {
        gps:{
            longitude:40.334115,
            latitude:55.999353
        },
        title:'point2',
        descr:'descrp2'
    },
    {
        gps:{
            longitude:40.331086,
            latitude:56.001465
        },
        title:'point3',
        descr:'descrp3'
    }
]

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex:100
  }
});
let watchID =null
const Map = React.createClass({
    render () {
        const inner = Styles.inner;
        const LatLng = {
              latitude:55.994736,
              longitude:40.331631,
            }
        let points = [];
        for(let key in gpsCoords)
            points.push(<MapView.Marker
                key={key}
                coordinate={gpsCoords[key].gps}
                title={gpsCoords[key].title}
                description={gpsCoords[key].description}
                image={require('../img/1.png')}
            />)
        return (
            <View style ={styles.container}>
               <MapView
                 style={styles.map}
                 showsCompass={true}
                 showsUserLocation={true}
                 followsUserLocation={true}
                 zoomEnabled={true}
                 mapType={'satellite'}
                 customMapStyle={mapStyle}
                 region={{
                        latitude: 55.994736,
                        longitude: 40.331631,
                        latitudeDelta: 0.008,
                        longitudeDelta: 0.008,
                 }}>
                    {points}
               </MapView>
            </View>
        )
    }
})

export default Map
