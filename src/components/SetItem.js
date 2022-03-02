import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react'

export default function SetItem(props) {

    const handleToggle = (value) => () => {
        const currentIndex = props.checked.indexOf(value);
        const checked = [...props.checked];

        if (currentIndex === -1) {
            checked.push(value);
        } else {
            checked.splice(currentIndex, 1);
        }

        props.setChecked(checked);
        console.log(checked)
    };

    return (
        <ListItem
            secondaryAction={
                <Checkbox
                    edge="end"
                    onChange={handleToggle(props.name)}
                    checked={props.checked.indexOf(props.name) !== -1}
                    inputProps={{ 'aria-labelledby': props.name }}
                />
            }>
            <ListItemAvatar>
                <Avatar

                />
            </ListItemAvatar>
            <ListItemText primary={`${props.name}`} />
        </ListItem>
    )
}