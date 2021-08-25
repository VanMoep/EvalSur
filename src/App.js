import React, { useRef, useEffect } from "react";
import { Map, TileLayer } from "react-leaflet";
import "leaflet-fullscreen/dist/Leaflet.fullscreen.js";
import "./App.css";
import "leaflet/dist/leaflet.css";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { defaultZoom: 13, defaultCenter: [0, 9] };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      this.setState({
        defaultCenter: [position.coords.latitude, position.coords.longitude]
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Map
          fullscreenControl={true}
          center={this.state.defaultCenter}
          zoom={this.state.defaultZoom}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </Map>
      </div>
    );
  }
}

export default App;
