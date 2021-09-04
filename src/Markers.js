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
                    .map((entry, idx) => (
                        <Marker key={`marker-${idx}`} position={[entry.lat, entry.lon]}>
                            <Popup>
                                <span>{entry.name}</span>
                                <span>{entry.tag}</span>
                            </Popup>
                        </Marker>
                    ))}
            </React.Fragment>
        );
    }
}
export default Markers;