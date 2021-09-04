import React from "react";
import { Marker, Popup } from "react-leaflet";

class Markers extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                {this.props.osmData
                    .filter((entry) => entry.type === "node" && entry.lat && entry.tags)
                    .map((entry, idx) => (
                        <Marker key={`marker-${idx}`} position={[entry.lat, entry.lon]}>
                            <Popup>
                                <span>{entry.tags.name}</span>
                            </Popup>
                        </Marker>
                    ))}
                {this.props.osmData
                    .filter((entry) => entry.type === "way" && entry.lat && entry.tags)
                    .map((entry, idx) => (
                        <Marker
                            key={`marker-${idx}`}
                            position={[entry.center.lat, entry.center.lon]}
                        >
                            <Popup>
                                <span>{entry.tags.name}</span>
                            </Popup>
                        </Marker>
                    ))}
            </React.Fragment>);
    }
}
export default Markers;