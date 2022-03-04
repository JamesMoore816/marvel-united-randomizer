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
import MemoizedAntiheroSetItem from './AntiheroSetItem'
import Divider from '@mui/material/Divider';
import React from 'react';


export default function Set(props) {    
    // const [allChecked, setAllChecked] = useState(false)
    // const [heroesChecked, setHeroesChecked] = useState([1])
    // const [villainsChecked, setVillainsChecked] = useState([1])
    // const [localLocationsChecked, setLocalLocationsChecked] = useState([1])

    const handleSetToggle = () => {
        let tempHeroes = [...props.heroesChecked]
            let tempVillains = [...props.villainsChecked]
        if ((props.heroes.every(hero => props.heroesChecked.includes(hero.name))
        && props.villains.every(villain => props.villainsChecked.includes(villain.name))
        && props.antiheroes.every(antihero => props.heroesChecked.includes(antihero.name))
        && props.antiheroes.every(antihero => props.villainsChecked.includes(antihero.name)))) {            
            for (let hero of props.heroes) {
                tempHeroes.splice(tempHeroes.indexOf(hero.name))
            }
            for (let villain of props.villains) {
                tempVillains.splice(tempVillains.indexOf(villain.name))
            }
            props.setHeroesChecked(tempHeroes)
            props.setVillainsChecked(tempVillains)
        }
        else {
            for (let hero of props.heroes) {
                if (!tempHeroes.includes(hero.name)) {tempHeroes.push(hero.name)}
            }
            for (let villain of props.villains) {
                if (!tempVillains.includes(villain.name)) {tempVillains.push(villain.name)}
            }
            for (let antihero of props.antiheroes) {
                if (!tempHeroes.includes(antihero.name)) {tempHeroes.push(antihero.name)}
                if (!tempVillains.includes(antihero.name)) {tempVillains.push(antihero.name)}
            }
            props.setHeroesChecked(tempHeroes)
            props.setVillainsChecked(tempVillains)
        }
    }

    const handleSetToggleWithLocations = () => {
        let tempHeroes = [...props.heroesChecked]
        let tempVillains = [...props.villainsChecked]
        let tempLocations = [...props.locationsChecked]        
        if ((props.heroes.every(hero => props.heroesChecked.includes(hero.name))
        && props.villains.every(villain => props.villainsChecked.includes(villain.name))
        && props.antiheroes.every(antihero => props.heroesChecked.includes(antihero.name))
        && props.antiheroes.every(antihero => props.villainsChecked.includes(antihero.name))
        && props.locations.every(location => props.locationsChecked.includes(location.name)))) {            
            for (let hero of props.heroes) {
                tempHeroes.splice(tempHeroes.indexOf(hero.name))
            }
            for (let villain of props.villains) {
                tempVillains.splice(tempVillains.indexOf(villain.name))
            }
            for (let location of props.locations) {
                tempLocations.splice(tempLocations.indexOf(location.name))
            }
            props.setHeroesChecked(tempHeroes)
            props.setVillainsChecked(tempVillains)
            props.setLocationsChecked(tempLocations)
        }
        else {
            
            for (let hero of props.heroes) {
                if (!tempHeroes.includes(hero.name)) {tempHeroes.push(hero.name)}
            }
            for (let villain of props.villains) {
                if (!tempVillains.includes(villain.name)) {tempVillains.push(villain.name)}
            }
            for (let antihero of props.antiheroes) {
                if (!tempHeroes.includes(antihero.name)) {tempHeroes.push(antihero.name)}
                if (!tempVillains.includes(antihero.name)) {tempVillains.push(antihero.name)}
            }
            for (let location of props.locations) {
                if (!tempLocations.includes(location.name)) {tempLocations.push(location.name)}
            }
            props.setHeroesChecked(tempHeroes)
            props.setVillainsChecked(tempVillains)
            props.setLocationsChecked(tempLocations)
        }
    }

    return (
        <div className="accordion-div">
            <Accordion className="set-accordion" elevation={0} square sx={{ width:"90%", maxWidth:400, borderStyle:"solid", borderWidth:"1px", borderColor:"#666666" }}>
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
                        checked={props.heroesChecked}
                        setChecked={props.setHeroesChecked}
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
                        checked={props.villainsChecked}
                        setChecked={props.setVillainsChecked}
                        type="villain"
                    >
                    </MemoizedSetItem>
                ))}
                {props.antiheroes.length >=1 ?
                    (<> <Divider /> <ListSubheader>Antiheroes</ListSubheader> </>)
                    : <></>}
                {props.antiheroes.map((antihero) => (
                    <MemoizedAntiheroSetItem
                        key={antihero.name}
                        name={antihero.name}
                        image={antihero.image}
                        heroesChecked={props.heroesChecked}
                        setHeroesChecked={props.setHeroesChecked}
                        villainsChecked={props.villainsChecked}
                        setVillainsChecked={props.setVillainsChecked}
                    >
                    </MemoizedAntiheroSetItem>
                ))}
                {props.locations.length >=1 && props.locationsOption===true ?
                    (<>
                        <Divider />
                        <ListSubheader>Locations</ListSubheader> 
                        {props.locations.map((location) => (
                            <MemoizedSetItem
                                key={location.name}
                                name={location.name}
                                checked={props.locationsChecked}
                                setChecked={props.setLocationsChecked}
                                type="location"
                            >
                            </MemoizedSetItem>
                        ))}
                    </>): <></>}                
                    </List>
                </AccordionDetails>
            </Accordion>
            {props.locationsOption===true ? (
                <Checkbox
                    className="set-checkbox"
                    onChange={handleSetToggleWithLocations}
                    checked={(props.heroes.every(hero => props.heroesChecked.includes(hero.name))
                        && props.villains.every(villain => props.villainsChecked.includes(villain.name))
                        && props.antiheroes.every(antihero => props.heroesChecked.includes(antihero.name))
                        && props.antiheroes.every(antihero => props.villainsChecked.includes(antihero.name))
                        && props.locations.every(location => props.locationsChecked.includes(location.name)))}
                ></Checkbox>
                ) : (
                <Checkbox
                    className="set-checkbox"
                    onChange={handleSetToggle}
                    checked={(props.heroes.every(hero => props.heroesChecked.includes(hero.name))
                        && props.villains.every(villain => props.villainsChecked.includes(villain.name))
                        && props.antiheroes.every(antihero => props.heroesChecked.includes(antihero.name))
                        && props.antiheroes.every(antihero => props.villainsChecked.includes(antihero.name)))}
                ></Checkbox>    
                ) }
        </div>
    )
}
export const MemoizedSet = React.memo(Set)