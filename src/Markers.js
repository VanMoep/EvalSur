import React from "react";
import { Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import ReactDOMServer from 'react-dom/server';
import { tagIconMapper } from './Mapping.js'

class Markers extends React.Component {

    constructor(props) {
        super(props);
        this.getIconForType = this.getIconForType.bind(this);
    }

    getIconForType(type) {
        return L.divIcon({
            className: 'custom-icon',
            html: ReactDOMServer.renderToString(tagIconMapper(type))
        });
    }

    render() {
        return (
            <React.Fragment>
                {this.props.osmData
                    .map((entry, idx) => (
                        <Marker key={`marker-${idx}`} position={[entry.lat, entry.lon]} icon={this.getIconForType(entry.type)}>
                            <Popup>
                                <span>{entry.type}</span>:
                                <span>{entry.name}</span>
                            </Popup>
                        </Marker>
                    ))}
                <Circle
                    center={{ lat: this.props.center[0], lng: this.props.center[1] }}
                    fillColor="blue"
                    radius={this.props.radius} />
                <Marker key={`marker-position`} position={[this.props.center[0], this.props.center[1]]} icon={this.getIconForType("position")} />
            </React.Fragment>
        );
    }
}
export default Markers;