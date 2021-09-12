import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { tagIconMapper } from './Mapping.js'

class OSMList extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <List dense={true}>
                {this.props.osmData
                    .map((entry, idx) => (
                        <ListItem alignItems="flex-start" key={`listitem-${idx}`} >
                            <ListItemAvatar>
                                <Avatar>
                                    {tagIconMapper(entry.type)}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={entry.name} secondary="Jan 9, 2014" />
                        </ListItem>

                    ))}
            </List>
        );
    }
}

export default OSMList;