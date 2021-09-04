import React from "react";
import { Map, TileLayer, LayersControl } from "react-leaflet";
import L from "leaflet";
import "./App.css";
import "leaflet/dist/leaflet.css";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import "leaflet-fullscreen/dist/Leaflet.fullscreen.js";
import "leaflet-easybutton/src/easy-button";
import Markers from "./Markers"
import Bar from "./Bar"
import Control from 'react-leaflet-control';

class App extends React.Component {
  leafletMap = null;

  constructor() {
    super();
    this.state = {
      defaultZoom: 13,
      defaultCenter: [0, 9],
      osmRequest: null,
      defaultRange: 1500,
      osmData: [],
      osmDataCounted: {}
    };
    this.loadOSMData = this.loadOSMData.bind(this);
    this.getTypeByTags = this.getTypeByTags.bind(this);
  }

  setLeafletMapRef = (map) => (this.leafletMap = map && map.leafletElement);


  loadOSMData() {
    //clear old map

    // get new data
    const queryOverpass = require("@derhuerst/query-overpass");
    var requestBody = this.state.osmRequest;
    requestBody = requestBody
      .replaceAll("<RANGE>", this.state.defaultRange)
      .replaceAll("<LAT>", this.leafletMap.getCenter().lat)
      .replaceAll("<LON>", this.leafletMap.getCenter().lng);
    console.log(
      "requesting OSM data for position",
      this.leafletMap.getCenter()
    );
    queryOverpass(requestBody)
      .then((response) => {
        // enhance the osm Response
        const parsedEntries = [];
        const entryMapCount = {};
        response
          .filter((entry) => (entry.type === "node" || entry.type === "way") && entry.lat && entry.tags)
          .map((entry, idx) => {
            const tag = this.getTypeByTags(entry.tags);
            parsedEntries.push({
              name: entry.tags.name,
              lat: (entry.type === "node") ? entry.lat : entry.center.lat,
              lon: (entry.type === "node") ? entry.lon : entry.center.lon,
              type: tag
            })
            if (entryMapCount.hasOwnProperty(tag)) {
              entryMapCount[tag] = entryMapCount[tag] + 1;
            } else {
              entryMapCount[tag] = 1;
            }
          });
        this.setState({
          osmData: parsedEntries,
          osmDataCounted: entryMapCount
        });
      })
      .catch(console.error);

    /*
     this.state.osmData.forEach(entry =>{
        if(entry.tags&&entry.tags.name){
          console.log(entry.tags.name, entry);
        }
      })
    */
  }

  getTypeByTags(tags) {
    if (tags.hasOwnProperty("shop") && tags.shop === "bakery")
      return "bakery"
    else if (tags.hasOwnProperty("shop") && tags.shop === "supermarket")
      return "supermarket"
    else if (tags.hasOwnProperty("shop") && tags.shop === "chemist")
      return "chemist"
    else if (tags.hasOwnProperty("amenity") && tags.amenity === "cinema")
      return "cinema"
    else if (tags.hasOwnProperty("sport") && tags.sport === "swimming")
      return "swimming"
    else if (tags.hasOwnProperty("amenity") && tags.amenity === "pharmacy")
      return "pharmacy"
    else if (tags.hasOwnProperty("amenity") && tags.amenity === "ice_cream")
      return "ice_cream"
    else if (tags.hasOwnProperty("amenity") && tags.amenity === "school")
      return "school"
    else if (tags.hasOwnProperty("amenity") && tags.amenity === "college")
      return "college"
    else if (tags.hasOwnProperty("amenity") && tags.amenity === "kindergarten")
      return "kindergarten"
    else if (tags.hasOwnProperty("leisure") && tags.leisure === "park")
      return "park"
    else if (tags.hasOwnProperty("leisure") && tags.amenity === "playground")
      return "playground"
    return "unknown";
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
      this.loadOSMData()
    ).addTo(this.leafletMap);
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
          <LayersControl position="topright">
            <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> 
            Data mining by [<a href="http://overpass-api.de/">Overpass API</a>]'
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
              <TileLayer
                url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}"
                attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                subdomains='abcd'
                ext='png'
              />
            </LayersControl.BaseLayer>
          </LayersControl>
          <Markers osmData={this.state.osmData} />
          <Control position="bottomleft" >
            <Bar osmData={this.state.osmDataCounted} />
          </Control>
        </Map>

      </div>
    );
  }
}

export default App;
