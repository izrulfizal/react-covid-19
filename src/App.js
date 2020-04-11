import React, { Component } from "react";
import "./App.css";
import data from "./components/data/map.json";
import mapboxgl from "mapbox-gl";
import { useState, useEffect } from "react";
import axios from "axios";
mapboxgl.accessToken = "pk.eyJ1IjoiZXJoYW5mYWRsaSIsImEiOiJjanlpcXJ0d3EwZDF2M21xaHljZXcyN2x1In0.QykinU8klSV-ZCDEi0G8rQ";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: 5,
            lat: 34,
            zoom: 9,
        };
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: "mapbox://styles/erhanfadli/ck84p63gd04gl1impbqwi9cza",
            center: [101.9, 3.109308],
            zoom: this.state.zoom,
        });

        axios
            .get(`/api`, {})
            .then((res) => {
                const data = res.data.covidList;
                console.log(data);

                const markers = [];
                data.forEach((element) => {
                    console.log(element.location.coordinates);
                    var el = document.createElement("div");
                    el.className = "marker";

                    new mapboxgl.Marker(el).setLngLat([element.location.coordinates[0], element.location.coordinates[1]]).addTo(map);
                    //markers.push(marker);
                });

                this.setState({
                    map,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
            </div>
        );
    }
}

export default App;
