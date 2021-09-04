import React from "react";
import { Marker, Popup } from "react-leaflet";
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
                                <span>{entry.name}</span>
                                <span>{entry.type}</span>
                            </Popup>
                        </Marker>
                    ))}
            </React.Fragment>
        );
    }
}
export default Markers;