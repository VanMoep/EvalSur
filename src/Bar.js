import React from "react";
import Badge from '@material-ui/core/Badge';
import Paper from '@material-ui/core/Paper';
import { tagIconMapper, tagColorMapper } from './Mapping'
import Tooltip from '@material-ui/core/Tooltip';
import ErrorIcon from '@material-ui/icons/Error';
import { Grid, Typography } from '@material-ui/core';
import CachedIcon from '@material-ui/icons/Cached';

class Bar extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
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
            if ((Object.getOwnPropertyNames(this.props.osmData).length > 0))
                return (
                    <Paper style={{ padding: "10px" }}>
                        {Object.keys(this.props.osmData)
                            .map((key) => (
                                <Tooltip title={key} aria-label={key}>
                                    <Badge badgeContent={this.props.osmData[key]} style={{ color: tagColorMapper(key) }}>
                                        {tagIconMapper(key)}
                                    </Badge>
                                </Tooltip>
                            ))}
                    </Paper  >
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