import React from "react";
import { Map, TileLayer, LayersControl } from "react-leaflet";
import L from "leaflet";
import "./App.css";
import "leaflet/dist/leaflet.css";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import "leaflet-fullscreen/dist/Leaflet.fullscreen.js";
import Markers from "./Markers"
import Bar from "./Bar"
import Control from 'react-leaflet-control';
import GpsNotFixedIcon from '@material-ui/icons/GpsNotFixed';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import Fab from '@material-ui/core/Fab';
import Popup from 'reactjs-popup';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import 'reactjs-popup/dist/index.css';
import Button from '@material-ui/core/Button';

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
      osmDataCounted: {},
      loading: false
    };
    this.loadOSMData = this.loadOSMData.bind(this);
    this.getTypeByTags = this.getTypeByTags.bind(this);
    this.handleRangeChange = this.handleRangeChange.bind(this);
  }

  setLeafletMapRef = (map) => (this.leafletMap = map && map.leafletElement);

  loadOSMData() {
    //clear old map   
    this.setState({
      loading: true,
      osmError: null
    });
    // get new data
    const queryOverpass = require("@derhuerst/query-overpass");
    var requestBody = this.state.osmRequest;
    requestBody = requestBody
      .replaceAll("<RANGE>", this.state.defaultRange)
      .replaceAll("<LAT>", this.leafletMap.getCenter().lat)
      .replaceAll("<LON>", this.leafletMap.getCenter().lng);
    console.log(
      "requesting OSM data for position",
      this.leafletMap.getCenter(),
      requestBody
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
          osmDataCounted: entryMapCount,
          loading: false,
          osmError: null
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          osmError: error
        });
      });

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
    else if (tags.hasOwnProperty("leisure") && tags.leisure === "playground")
      return "playground"
    return "unknown";
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        defaultCenter: [position.coords.latitude, position.coords.longitude]
      });
    });
    fetch("data/overpassQL.txt").then((res) =>
      res.text().then((text) => {
        console.log(text);
        this.setState({ osmRequest: text });
      })
    );
  }

  handleRangeChange(event, value) {
    this.setState({
      defaultRange: value
    });
  }


  valuetext(value) {
    return `${value}km`;
  }

  render() {
    const marks = [
      {
        value: 500,
        label: '0.5 km',
      },
      {
        value: 1500,
        label: '1.5 km',
      },
      {
        value: 3000,
        label: '3 km',
      }
    ];

    return (
      <div className="App">
        <Map
          ref={this.setLeafletMapRef}
          fullscreenControl={true}
          center={this.state.defaultCenter}
          zoom={this.state.defaultZoom}
        >
          <LayersControl position="topright">
            <LayersControl.BaseLayer checked name="CartoDB.VoyagerLabelsUnder">
              <TileLayer
                url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a> | Data mining by [<a href="http://overpass-api.de/">Overpass API</a>]'
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer checked name="CartoDB.Positron">
              <TileLayer
                url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a> | Data mining by [<a href="http://overpass-api.de/">Overpass API</a>]'
                subdomains='abcd'
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="OpenStreetMap.BZH">
              <TileLayer
                url="https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of <a href="http://www.openstreetmap.bzh/" target="_blank">Breton OpenStreetMap Team</a> | Data mining by [<a href="http://overpass-api.de/">Overpass API</a>]'
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="OpenStreetMap.Mapnik">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | Data mining by [<a href="http://overpass-api.de/">Overpass API</a>]'
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Stamen.Toner">
              <TileLayer
                url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}"
                attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Data mining by [<a href="http://overpass-api.de/">Overpass API</a>]'
                subdomains='abcd'
                ext='png'
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Stadia.AlidadeSmooth">
              <TileLayer
                url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors | Data mining by [<a href="http://overpass-api.de/">Overpass API</a>]'
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Stadia.AlidadeSmoothDark">
              <TileLayer
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors | Data mining by [<a href="http://overpass-api.de/">Overpass API</a>]'
              />
            </LayersControl.BaseLayer>
          </LayersControl>
          <Markers osmData={this.state.osmData} />
          <Control position="topleft" >
            <Fab size="small" onClick={() => {
              navigator.geolocation.getCurrentPosition((position) => {
                this.leafletMap.setView([position.coords.latitude, position.coords.longitude]);
              });
            }}>
              <GpsNotFixedIcon />
            </Fab>
          </Control>
          <Control position="topleft" >
            <Popup
              trigger={<Fab size="small"><AutorenewIcon /></Fab >}
              modal
              nested
            >
              {close => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="header"> select search radius </div>
                  <div className="content">
                    {' '}
                    <Grid container spacing={2}>
                      <Grid item>
                      </Grid>
                      <Grid item xs>
                        <Typography id="discrete-slider-always" gutterBottom>
                        </Typography>
                        <Slider value={this.state.defaultRange} onChange={this.handleRangeChange}
                          aria-labelledby="discrete-slider-always" step={500} defaultValue={1500} min={500} max={3000}
                          marks={marks} getAriaValueText={this.valuetext} valueLabelDisplay="on" />
                      </Grid>
                      <Grid item>
                      </Grid>
                    </Grid>
                  </div>
                  <div className="actions">
                    <Button variant="contained" color="primary"
                      onClick={() => {
                        this.loadOSMData();
                        close();
                      }}
                    >load</Button>
                  </div>
                </div>
              )}
            </Popup>
          </Control>
          <Control position="bottomleft" >
            <Bar osmData={this.state.osmDataCounted} loading={this.state.loading} osmError={this.state.osmError} />
          </Control>
        </Map>
      </div>
    );
  }
}

export default App;
