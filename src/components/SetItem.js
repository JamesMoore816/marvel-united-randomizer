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
        backgroundGrad = 'pink-grad3.svg'
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
            // sx={{backgroundColor:backgroundColor}}
            // sx={{ backgroundImage: }}
            sx={{ backgroundImage:`url(${props.image}), url(${backgroundGrad})`, backgroundRepeat:"no-repeat, repeat", backgroundPosition:"0 -18px, 0 0", backgroundSize:"18%, 100%" }}
            secondaryAction={
                <Checkbox
                    edge="end"
                    onChange={handleToggle(props.name)}
                    checked={props.checked.indexOf(props.name) !== -1}
                    inputProps={{ 'aria-labelledby': props.name }}
                    sx={{'&.Mui-checked': {color: checkColor}}}
                />
            }>
            {/* <ListItemAvatar>
                <Avatar variant="square"
                    sx={{borderStyle:"solid", borderWidth:2, borderColor:"#666666"}}
                    alt={props.name}
                    src={props.image}
                />
            </ListItemAvatar> */}
            <ListItemText primary={`${props.name}`} sx={{marginLeft:9}}/>
        </ListItem>
        <Divider />
        </>
    )
}

export const MemoizedSetItem = React.memo(SetItem)