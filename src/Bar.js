import React from "react";
import Badge from '@material-ui/core/Badge';
import Paper from '@material-ui/core/Paper';
import { tagIconMapper, tagColorMapper } from './Mapping'
import Tooltip from '@material-ui/core/Tooltip';

class Bar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.osmData)
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
        else {
            return <React.Fragment />
        }
    }

}
export default Bar;