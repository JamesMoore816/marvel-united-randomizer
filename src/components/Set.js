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


export default function Set(props) {

    return (
        <div className="accordion-div">
            <Accordion className="set-accordion" sx={{ width:"100%", maxWidth:400 }}>
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
                    {props.heroes.map((hero) => (
                    <SetItem
                        key={hero.name}
                        name={hero.name}
                        checked={props.heroesChecked}
                        setChecked={props.setHeroesChecked}
                    >
                    </SetItem>
                ))}
                {props.villains.map((villain) => (
                    <SetItem
                        key={villain.name}
                        name={villain.name}
                        checked={props.villainsChecked}
                        setchecked={props.setVillainsChecked}
                    >
                    </SetItem>
                ))}
                {props.locations.map((location) => (
                    <SetItem
                        key={location.name}
                        name={location.name}
                        checked={props.locationsChecked}
                        setChecked={props.setLocationsChecked}
                    >
                    </SetItem>
                ))}
                    </List>
                </AccordionDetails>
            </Accordion>
        </div>
    )

}