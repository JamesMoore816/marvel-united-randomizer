import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import React from 'react';

export default function OptionsMenu(props) {

    const toggleLocations = () => {
        props.setLocationsOption(!props.locationsOption);
    }

    // const toggleDupes = () => {
    //     props.setAllowDupes(!props.allowDupes);
    // }

    const toggleNumHeroes = (event) => {
        if (props.numHeroes !== event.target.value) {
            props.setNumHeroes(event.target.value)
        }
    }

    return (
        <div className="options-list">
            <List>
                <ListItem
                    secondaryAction={<Checkbox edge="end" checked={props.locationsOption === true} onChange={toggleLocations} />}>
                    <ListItemText primary={"Include locations"} />
                </ListItem>
                {/* <ListItem
                    secondaryAction={<Checkbox edge="end" checked={props.allowDupes === true} onChange={toggleDupes} />}>
                    <ListItemText primary={"Allow multiple versions of same character"} />
                </ListItem> */}
                <ListItem
                    secondaryAction={
                        <RadioGroup row
                            edge="end"
                            aria-labelledby="number-of-heroes-radio-buttons"
                            defaultValue="2"
                            name="number-of-heroes"
                            onChange={toggleNumHeroes}
                        >
                        <FormControlLabel value="2" control={<Radio />} label="2" labelPlacement="start"/>
                        <FormControlLabel value="3" control={<Radio />} label="3" labelPlacement="start"/>
                        <FormControlLabel value="4" control={<Radio />} label="4" labelPlacement="start"/>
                    </RadioGroup>} >
                    <ListItemText primary={"Number of heroes"} /> 
                </ListItem>
            </List>
        </div>
    )
}

export const MemoizedOptionsMenu = React.memo(OptionsMenu)