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
import SetItem from './SetItem'
import AntiheroSetItem from './AntiheroSetItem'
import Divider from '@mui/material/Divider';


export default function Set(props) {

    const handleSetToggle = () => {
        console.log("set")
    }

    return (
        <div className="accordion-div">
            <Accordion className="set-accordion" sx={{ width:"100%", maxWidth:450 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ height:"auto" }}
                >
                    <Typography>{props.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List>
                    {props.heroes.length >=1 ? (<ListSubheader>Heroes</ListSubheader>)
                    : <></>}                   
                    {props.heroes.map((hero) => (
                    <SetItem
                        key={hero.name}
                        name={hero.name}
                        checked={props.heroesChecked}
                        setChecked={props.setHeroesChecked}
                        type="hero"
                    >
                    </SetItem>                    
                ))}
                {props.villains.length >=1 ?
                    (<> <Divider /> <ListSubheader>Villains</ListSubheader> </>)
                    : <></>}
                {props.villains.map((villain) => (
                    <SetItem
                        key={villain.name}
                        name={villain.name}
                        checked={props.villainsChecked}
                        setChecked={props.setVillainsChecked}
                        type="villain"
                    >
                    </SetItem>
                ))}
                {props.antiheroes.length >=1 ?
                    (<> <Divider /> <ListSubheader>Antiheroes</ListSubheader> </>)
                    : <></>}
                {props.antiheroes.map((antihero) => (
                    <AntiheroSetItem
                        key={antihero.name}
                        name={antihero.name}
                        heroesChecked={props.heroesChecked}
                        setHeroesChecked={props.setHeroesChecked}
                        villainsChecked={props.villainsChecked}
                        setVillainsChecked={props.setVillainsChecked}
                    >
                    </AntiheroSetItem>
                ))}
                {props.locations.length >=1 ?
                    (<> <Divider /> <ListSubheader>Locations</ListSubheader> </>)
                    : <></>}
                {props.locations.map((location) => (
                    <SetItem
                        key={location.name}
                        name={location.name}
                        checked={props.locationsChecked}
                        setChecked={props.setLocationsChecked}
                        type="location"
                    >
                    </SetItem>
                ))}
                    </List>
                </AccordionDetails>
            </Accordion>
            <Checkbox
                className="set-checkbox"
                onChange={handleSetToggle(props.title)}
                // checked={props.checked.indexOf(props.name) !== -1}
            ></Checkbox>
        </div>
    )

}