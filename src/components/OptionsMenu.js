import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import React from 'react';
import { useState } from 'react';

export default function OptionsMenu(props) {
    const [locationsOptionLocal, setLocationsOptionLocal] = useState(props.locationsOption)
    const [allowDupesLocal, setAllowDupesLocal] = useState(props.allowDupes)

    const toggleLocations = () => {
        props.setLocationsOption(!props.locationsOption);
        setLocationsOptionLocal(!locationsOptionLocal);
        console.log(props)
      }
    
      const toggleDupes = () => {
        props.setAllowDupes(!props.allowDupes);
        setAllowDupesLocal(!allowDupesLocal);
      }

    return (
        <div className="options-list">
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox checked={locationsOptionLocal === true} onChange={toggleLocations} />}
                    label="Include locations" />
                <FormControlLabel
                    control={<Checkbox checked={allowDupesLocal === true} onChange={toggleDupes} />}
                    label="Allow multiple versions of same character" />
            </FormGroup>
        </div>
    )
}

export const MemoizedOptionsMenu = React.memo(OptionsMenu)