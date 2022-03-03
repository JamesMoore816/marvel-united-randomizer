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
import MemoizedSetItem from './SetItem'
import AntiheroSetItem from './AntiheroSetItem'
import Divider from '@mui/material/Divider';
import React from 'react';


export default function Set(props) {    
    const [allChecked, setAllChecked] = useState(false)
    const [localHeroesChecked, setLocalHeroesChecked] = useState([1])
    const [localVillainsChecked, setLocalVillainsChecked] = useState([1])
    const [localLocationsChecked, setLocalLocationsChecked] = useState([1])

    const handleSetToggle = () => {
        if ((props.heroes.every(hero => localHeroesChecked.includes(hero.name))
        && props.villains.every(villain => localVillainsChecked.includes(villain.name))
        && props.antiheroes.every(antihero => localHeroesChecked.includes(antihero.name))
        && props.antiheroes.every(antihero => localVillainsChecked.includes(antihero.name)))) {
            setLocalHeroesChecked([1]);
            setLocalVillainsChecked([1]);
        }
        else {
            let tempHeroes = [1]
            props.heroes.every(hero => tempHeroes.push(hero.name))
            props.antiheroes.every(antihero => tempHeroes.push(antihero.name))
            setLocalHeroesChecked(tempHeroes)
            let tempVillains = [1]
            props.villains.every(villain => tempVillains.push(villain.name))
            props.antiheroes.every(antihero => tempVillains.push(antihero.name))
            setLocalVillainsChecked(tempVillains)
        }
    }

    return (
        <div className="accordion-div">
            <Accordion className="set-accordion" elevation={0} square sx={{ width:"100%", maxWidth:450, borderStyle:"solid", borderWidth:"1px", borderColor:"#666666" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ height:"auto"}}
                >
                    <ListItemAvatar><Avatar variant="square" src={props.image} /></ListItemAvatar>
                    <Typography>{props.title}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding:0 }}>
                    <List sx={{padding:0}}>
                    {props.heroes.length >=1 ? (<ListSubheader>Heroes</ListSubheader>)
                    : <></>}                   
                    {props.heroes.map((hero) => (
                    <MemoizedSetItem
                        key={hero.name}
                        name={hero.name}
                        image={hero.image}
                        checked={localHeroesChecked}
                        setChecked={setLocalHeroesChecked}
                        appHeroesChecked={props.appHeroesChecked}
                        setAppHeroesChecked={props.setAppHeroesChecked}
                        type="hero"
                    >
                    </MemoizedSetItem>                    
                ))}
                {props.villains.length >=1 ?
                    (<> <Divider /> <ListSubheader>Villains</ListSubheader> </>)
                    : <></>}
                {props.villains.map((villain) => (
                    <MemoizedSetItem
                        key={villain.name}
                        name={villain.name}
                        image={villain.image}
                        checked={localVillainsChecked}
                        setChecked={setLocalVillainsChecked}
                        appVillainsChecked={props.appVilliansChecked}
                        setAppVillainsChecked={props.setAppVillainsChecked}
                        type="villain"
                    >
                    </MemoizedSetItem>
                ))}
                {props.antiheroes.length >=1 ?
                    (<> <Divider /> <ListSubheader>Antiheroes</ListSubheader> </>)
                    : <></>}
                {props.antiheroes.map((antihero) => (
                    <AntiheroSetItem
                        key={antihero.name}
                        name={antihero.name}
                        image={antihero.image}
                        heroesChecked={localHeroesChecked}
                        setHeroesChecked={setLocalHeroesChecked}
                        villainsChecked={localVillainsChecked}
                        setVillainsChecked={setLocalVillainsChecked}
                        appHeroesChecked={props.appHeroesChecked}
                        setAppHeroesChecked={props.setAppHeroesChecked}
                        appVillainsChecked={props.appVilliansChecked}
                        setAppVillainsChecked={props.setAppVillainsChecked}
                    >
                    </AntiheroSetItem>
                ))}
                {/* {props.locations.length >=1 ?
                    (<> <Divider /> <ListSubheader>Locations</ListSubheader> </>)
                    : <></>}
                {props.locations.map((location) => (
                    <SetItem
                        key={location.name}
                        name={location.name}
                        checked={locallocationsChecked}
                        setChecked={setLocalLocationsChecked}
                        type="location"
                    >
                    </SetItem>
                ))} */}
                    </List>
                </AccordionDetails>
            </Accordion>
            <Checkbox
                className="set-checkbox"
                onChange={handleSetToggle}
                checked={(props.heroes.every(hero => localHeroesChecked.includes(hero.name))
                    && props.villains.every(villain => localVillainsChecked.includes(villain.name))
                    && props.antiheroes.every(antihero => localHeroesChecked.includes(antihero.name))
                    && props.antiheroes.every(antihero => localVillainsChecked.includes(antihero.name)))}
            ></Checkbox>
        </div>
    )
}
export const MemoizedSet = React.memo(Set)