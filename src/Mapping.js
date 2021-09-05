
import React from "react";
import RestaurantIcon from '@material-ui/icons/Restaurant';
import SchoolIcon from '@material-ui/icons/School';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import ApartmentIcon from '@material-ui/icons/Apartment';
import CategoryIcon from '@material-ui/icons/Category';
import PoolIcon from '@material-ui/icons/Pool';
import CakeIcon from '@material-ui/icons/Cake';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import indigo from '@material-ui/core/colors/green';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import brown from '@material-ui/core/colors/brown';
import cyan from '@material-ui/core/colors/cyan';
import pink from '@material-ui/core/colors/pink';
import teal from '@material-ui/core/colors/teal';

const tagIconMapper = function (tag) {
    switch (tag) {
        case "bakery":
            return <CakeIcon style={{
                color: tagColorMapper(tag),
                margin: "2px"
            }} />;
        case "college":
            return <ApartmentIcon style={{
                color: tagColorMapper(tag),
                margin: "2px"
            }} />;
        case "kindergarten":
            return <ChildCareIcon style={{
                color: tagColorMapper(tag),
                margin: "2px"
            }} />;
        case "school":
            return <SchoolIcon style={{
                color: tagColorMapper(tag),
                margin: "2px"
            }} />;
        case "supermarket":
            return <LocalGroceryStoreIcon style={{
                color: tagColorMapper(tag),
                margin: "2px"
            }} />;
        case "swimming":
            return <PoolIcon style={{
                color: tagColorMapper(tag),
                margin: "2px"
            }} />;
        case "cinema":
            return <LocalMoviesIcon style={{
                color: tagColorMapper(tag),
                margin: "2px"
            }} />;
        case "playground":
            return <CategoryIcon style={{
                color: tagColorMapper(tag),
                margin: "2px"
            }} />;
        case "park":
            return <LocalFloristIcon style={{
                color: tagColorMapper(tag),
                margin: "2px"
            }} />;
        case "pharmacy":
            return <LocalPharmacyIcon style={{
                color: tagColorMapper(tag),
                margin: "2px"
            }} />;
        case "chemist":
            return <AddShoppingCartIcon style={{
                color: tagColorMapper(tag),
                margin: "2px"
            }} />;
        case "unknown":
            return <TurnedInIcon style={{
                color: tagColorMapper(tag),
                margin: "2px"
            }} />;
        default:
            return <TurnedInNotIcon style={{
                color: tagColorMapper(tag),
                margin: "2px"
            }} />;
    }
}

const tagColorMapper = function (tag) {
    switch (tag) {
        case "bakery":
            return amber[500];
        case "supermarket":
            return brown[500];
        case "swimming":
            return indigo[500];
        case "cinema":
            return purple[500];
        case "playground":
            return teal[500];
        case "park":
            return green[500];
        case "pharmacy":
            return red[500];
        case "unknown":
            return grey[500];
        case "school":
            return cyan[500];
        case "kindergarten":
            return pink[500];
        default:
            return grey[900];
    }
}
export {
    tagIconMapper, tagColorMapper
};
//export default [tagIconMapper, tagColorMapper]