import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react'

export default function SetItem(props) {
    let backgroundColor = ""
    let checkColor = ""
    if (props.type === "hero") {
        backgroundColor = "lightblue"
        checkColor = "royalblue"
    }
    else if (props.type === "villain") {
        backgroundColor = "lightpink"
        checkColor = "firebrick"
    }
    else if (props.type === "location") {
        backgroundColor = "lightgray"
        checkColor = "black"
    }
    else if (props.type === "location") {
        backgroundColor = "thistle"
    }

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
        <>
        <ListItem
            sx={{backgroundColor:backgroundColor}}
            secondaryAction={
                <Checkbox
                    edge="end"
                    onChange={handleToggle(props.name)}
                    checked={props.checked.indexOf(props.name) !== -1}
                    inputProps={{ 'aria-labelledby': props.name }}
                    sx={{'&.Mui-checked': {color: checkColor}}}
                />
            }>
            <ListItemAvatar>
                <Avatar
                    sx={{borderStyle:"solid", borderWidth:2, borderColor:"#666666"}}
                    alt={props.name}
                    src={props.image}
                />
            </ListItemAvatar>
            <ListItemText primary={`${props.name}`} />
        </ListItem>
        {/* <Divider/> */}
        </>
    )
}