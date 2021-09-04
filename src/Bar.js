import React from "react";
import Badge from '@material-ui/core/Badge';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import PoolIcon from '@material-ui/icons/Pool';
import CakeIcon from '@material-ui/icons/Cake';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';

class Bar extends React.Component {

    constructor(props) {
        super(props);
        this.tagIconMapper = this.tagIconMapper.bind(this);
    }

    tagIconMapper(tag) {
        switch (tag) {
            case "bakery":
                return <CakeIcon />;
            case "supermarket":
                return <LocalGroceryStoreIcon />;
            case "swimming":
                return <PoolIcon />;
            case "cinema":
                return <LocalMoviesIcon />;
            case "park":
                return <LocalFloristIcon />;
            case "pharmacy":
                return <LocalPharmacyIcon />;
            case "unknown":
                return <TurnedInIcon />;
            default:
                return <TurnedInNotIcon />;
        }
    }

    render() {
        if (this.props.osmData)
            return (
                <React.Fragment>
                    {Object.keys(this.props.osmData)
                        .map((key) => (
                            <Badge badgeContent={this.props.osmData[key]} color="primary">
                                {this.tagIconMapper(key)}
                            </Badge>
                        ))}
                </React.Fragment>
            );
        else {
            return <React.Fragment />
        }
    }

}
export default Bar;