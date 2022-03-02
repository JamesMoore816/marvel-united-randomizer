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

export default function AntiheroSetItem(props) {
    let backgroundColor = "thistle"

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
            sx={{backgroundColor:backgroundColor}}
            secondaryAction={
                <>
                <Checkbox
                    edge="end"
                    onChange={handleHeroToggle(props.name)}
                    checked={props.heroesChecked.indexOf(props.name) !== -1}
                    inputProps={{ 'aria-labelledby': props.name }}
                /><Checkbox
                edge="end"
                onChange={handleVillainToggle(props.name)}
                checked={props.villainsChecked.indexOf(props.name) !== -1}
                inputProps={{ 'aria-labelledby': props.name }}
                />
                </>
            }>
            <ListItemAvatar>
                <Avatar

                />
            </ListItemAvatar>
            <ListItemText primary={`${props.name}`} />
        </ListItem>
    )
}