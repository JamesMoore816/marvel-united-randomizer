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
import React from 'react'

export default function SetItem(props) {
    let backgroundColor = ""
    let backgroundColor2 = ""
    let backgroundGrad = ""
    let checkColor = ""
    if (props.type === "hero") {
        backgroundColor = "#99DDFF"
        backgroundColor2 = "#E6F7FF"
        backgroundGrad = 'blue-grad.svg'
        checkColor = "royalblue"
    }
    else if (props.type === "villain") {
        backgroundColor = "#FF9999"
        backgroundColor2 = "#FFE6E6"
        backgroundGrad = 'red-grad.svg'
        checkColor = "firebrick"
    }
    else if (props.type === "location") {
        backgroundColor = "#CCCCCC"
        backgroundColor2 = "#F2F2F2"
        backgroundGrad = 'gray-grad.svg'
        checkColor = "black"
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
    };

    return (
        <>
        <ListItem
            sx={{ backgroundImage:`url(${props.entry.image}), url(${backgroundGrad})`, backgroundRepeat:"no-repeat, repeat", backgroundPosition:"0 -18px, 0 0", backgroundSize:"21%, 100%" }}
            secondaryAction={
                <Checkbox
                    edge="end"
                    onChange={handleToggle(props.entry)}
                    checked={props.checked.indexOf(props.entry) !== -1}
                    inputProps={{ 'aria-labelledby': props.entry.name }}
                    sx={{'&.Mui-checked': {color: checkColor}}}
                />
            }>
            <ListItemText primary={`${props.entry.name}`} sx={{marginLeft:11}}/>
        </ListItem>
        <Divider />
        </>
    )
}

export const MemoizedSetItem = React.memo(SetItem)