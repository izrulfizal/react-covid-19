import React, { Component } from 'react';
import './App.css';
import data from './components/data/map.json'
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZXJoYW5mYWRsaSIsImEiOiJjanlpcXJ0d3EwZDF2M21xaHljZXcyN2x1In0.QykinU8klSV-ZCDEi0G8rQ';


class App extends Component {

 
  
  constructor(props) {
    super(props);
    this.state = {
    lng: 5,
    lat: 34,
    zoom: 9
    };
    }

    componentDidMount() {
      const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/erhanfadli/ck84p63gd04gl1impbqwi9cza',
      center: [101.90, 3.109308],
      zoom: this.state.zoom
      });

      // alert(data.features[0].properties.latitude); Add Marker to map from JSON
      data.features.forEach(element => {
        console.log(element.properties.latitude)
        var el = document.createElement('div');
        el.className = 'marker';
  
    
        new mapboxgl.Marker(el)
          .setLngLat([element.properties.longitude, element.properties.latitude])
          .addTo(map);
      });

      }

      render() {
        return (
        <div>
        <div ref={el => this.mapContainer = el} className="mapContainer" />
        </div>
        )
        }
}

export default App;

