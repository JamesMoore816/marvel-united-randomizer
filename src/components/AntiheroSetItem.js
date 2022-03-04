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
import { blue, pink, red } from '@mui/material/colors';
import React from 'react'

export default function AntiheroSetItem(props) {
    let backgroundColor = "#E6D1FA"
    let backgroundColor2 = "#F3E6FF"

    const handleHeroToggle = (value) => () => {
        const currentIndex = props.heroesChecked.indexOf(value);
        const checked = [...props.heroesChecked];

        if (currentIndex === -1) {
            checked.push(value);
        } else {
            checked.splice(currentIndex, 1);
        }

        props.setHeroesChecked(checked);
        console.log(checked)
    };

    const handleVillainToggle = (value) => () => {
        const currentIndex = props.villainsChecked.indexOf(value);
        const checked = [...props.villainsChecked];

        if (currentIndex === -1) {
            checked.push(value);
        } else {
            checked.splice(currentIndex, 1);
        }

        props.setVillainsChecked(checked);
        console.log(checked)
    };

    return (
        <ListItem
            // sx={{backgroundColor:backgroundColor}}
            sx={{ backgroundImage:`url(${props.entry.image}), url(purple-grad.svg)`, backgroundRepeat:"no-repeat, repeat", backgroundPosition:"0 -18px, 0 0", backgroundSize:"21%, 100%" }}
            secondaryAction={
                <>
                <Checkbox
                    edge="end"
                    onChange={handleHeroToggle(props.entry)}
                    checked={props.heroesChecked.indexOf(props.entry) !== -1}
                    inputProps={{ 'aria-labelledby': props.entry.name }}
                    sx={{'&.Mui-checked': {color: "royalblue"}}}
                /><Checkbox
                    edge="end"
                    onChange={handleVillainToggle(props.entry)}
                    checked={props.villainsChecked.indexOf(props.entry) !== -1}
                    inputProps={{ 'aria-labelledby': props.entry.name }}
                    sx={{'&.Mui-checked': {color: "firebrick"}}}
                />
                </>
            }>
            {/* <ListItemAvatar>
            <Avatar
                    sx={{borderStyle:"solid", borderWidth:2, borderColor:"#666666"}}
                    alt={props.name}
                    src={props.image}
                />
            </ListItemAvatar> */}
            <ListItemText primary={`${props.entry.name}`} sx={{marginLeft:10}}/>
        </ListItem>
    )
}

export const MemoizedAntiheroSetItem = React.memo(AntiheroSetItem, [])