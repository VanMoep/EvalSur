import React, { useRef, useEffect } from "react";
import { Map, TileLayer } from "react-leaflet";
import L from "leaflet";
import "./App.css";
import "leaflet/dist/leaflet.css";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import "leaflet-fullscreen/dist/Leaflet.fullscreen.js";
import "leaflet-easybutton/src/easy-button";

class App extends React.Component {
  leafletMap = null;

  constructor() {
    super();
    this.state = {
      defaultZoom: 13,
      defaultCenter: [0, 9],
      osmRequest: null,
      defaultRange: 1500
    };
    this.getIcons = this.getIcons.bind(this);
  }

  setLeafletMapRef = (map) => (this.leafletMap = map && map.leafletElement);

  getIcons() {
    //clear old map

    // get new markers
    const queryOverpass = require("@derhuerst/query-overpass");
    var requestBody = this.state.osmRequest;
    requestBody = requestBody
      .replaceAll("<RANGE>", this.state.defaultRange)
      .replaceAll("<LAT>", this.leafletMap.getCenter().lat)
      .replaceAll("<LON>", this.leafletMap.getCenter().lng);
    console.log(requestBody);
    queryOverpass(requestBody).then(console.log).catch(console.error);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        defaultCenter: [position.coords.latitude, position.coords.longitude]
      });
    });
    fetch("././overpassQL.txt").then((res) =>
      res.text().then((text) => this.setState({ osmRequest: text }))
    );
    L.easyButton('<span class="target">	&target;</span>', function (btn, map) {
      navigator.geolocation.getCurrentPosition((position) => {
        map.setView([position.coords.latitude, position.coords.longitude]);
      });
    }).addTo(this.leafletMap);
    L.easyButton('<span class="download">	&DownArrowBar;</span>', () =>
      this.getIcons()
    ).addTo(this.leafletMap);
    console.log(this.leafletMap.getCenter());
  }

  render() {
    return (
      <div className="App">
        <Map
          ref={this.setLeafletMapRef}
          fullscreenControl={true}
          center={this.state.defaultCenter}
          zoom={this.state.defaultZoom}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> 
            Data mining by [<a href="http://overpass-api.de/">Overpass API</a>]'
          />
        </Map>
      </div>
    );
  }
}

export default App;
