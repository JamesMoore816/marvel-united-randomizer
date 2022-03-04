import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import React from 'react';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function OptionsMenu(props) {

    const toggleLocations = () => {
        props.setLocationsOption(!props.locationsOption);
        console.log(props)
    }

    const toggleDupes = () => {
        props.setAllowDupes(!props.allowDupes);
    }

    const toggleNumHeroes = (event) => {
        if (props.numHeroes !== event.target.value) {
            props.setNumHeroes(event.target.value)
        }
    }

    return (
        <div className="options-list">
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox checked={props.locationsOption === true} onChange={toggleLocations} />}
                    label="Include locations" />
                <FormControlLabel
                    control={<Checkbox checked={props.allowDupes === true} onChange={toggleDupes} />}
                    label="Allow multiple versions of same character" />
            </FormGroup>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Number of Heroes</FormLabel>
                <RadioGroup
                    aria-labelledby="number-of-heroes-radio-buttons"
                    defaultValue="2"
                    name="number-of-heroes"
                    onChange={toggleNumHeroes}
                >
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <FormControlLabel value="4" control={<Radio />} label="4" />
                </RadioGroup>
            </FormControl>
        </div>
    )
}

export const MemoizedOptionsMenu = React.memo(OptionsMenu)