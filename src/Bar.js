import React from "react";
import Badge from '@material-ui/core/Badge';
import Paper from '@material-ui/core/Paper';
import { tagIconMapper, tagColorMapper } from './Mapping'
import Tooltip from '@material-ui/core/Tooltip';
import ErrorIcon from '@material-ui/icons/Error';
import { Grid, Typography } from '@material-ui/core';
import CachedIcon from '@material-ui/icons/Cached';
import Popup from 'reactjs-popup';
import Button from '@material-ui/core/Button';
import OSMList from "./OSMList"

class Bar extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        const contentStyle = {
            height: "90vh",
            width: "100%"
        };
        if (this.props.loading) {
            return (
                <Paper style={{ padding: "5px" }}>
                    <Grid container spacing={3}>
                        <Grid item xs={2}>
                            <CachedIcon />
                        </Grid>
                        <Grid item xs={10}>
                            <Typography align="center">
                                loading OSM data
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper  >
            );
        } else {
            if ((Object.getOwnPropertyNames(this.props.osmDataCounted).length > 0))
                return (
                    <Popup contentStyle={contentStyle}
                        trigger={
                            <Paper style={{ padding: "10px" }}>
                                {Object.keys(this.props.osmDataCounted)
                                    .map((key) => (
                                        <Tooltip title={key} aria-label={key}>
                                            <Badge badgeContent={this.props.osmDataCounted[key]} style={{ color: tagColorMapper(key) }}>
                                                {tagIconMapper(key)}
                                            </Badge>
                                        </Tooltip>
                                    ))}
                            </Paper  >
                        }
                        modal
                        nested
                    >
                        {close => (
                            <div className="modal" fullscreen={true} scrollable={true}>
                                <button className="close" onClick={close}>
                                    &times;
                                </button>
                                <div className="header"> POIs within range of {this.props.range}m </div>
                                <div className="content">
                                    {' '}
                                    <OSMList osmData={this.props.osmData} />
                                </div>
                            </div>
                        )}
                    </Popup>

                );
            else if (this.props.osmError) {
                return (
                    <Paper style={{ padding: "5px" }}>
                        <Grid container spacing={3}>
                            <Grid item xs={2}>
                                <ErrorIcon color="error" />
                            </Grid>
                            <Grid item xs={10}>
                                <Typography align="center" color="error">
                                    {this.props.osmError.message}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper  >
                );
            } else {
                return <React.Fragment />
            }
        }
    }

}
export default Bar;