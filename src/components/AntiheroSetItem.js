import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import React from 'react'

export default function AntiheroSetItem(props) {

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
            <ListItemText primary={`${props.entry.name}`} sx={{marginLeft:10}}/>
        </ListItem>
    )
}

export const MemoizedAntiheroSetItem = React.memo(AntiheroSetItem, [])