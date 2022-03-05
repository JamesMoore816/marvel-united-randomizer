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
        if ((props.heroes.every(hero => props.heroesChecked.includes(hero))
            && props.villains.every(villain => props.villainsChecked.includes(villain))
            && props.antiheroes.every(antihero => props.heroesChecked.includes(antihero))
            && props.antiheroes.every(antihero => props.villainsChecked.includes(antihero)))) {
            for (let hero of props.heroes) {
                tempHeroes.splice(tempHeroes.indexOf(hero))
            }
            for (let villain of props.villains) {
                tempVillains.splice(tempVillains.indexOf(villain))
            }
            props.setHeroesChecked(tempHeroes)
            props.setVillainsChecked(tempVillains)
        }
        else {
            for (let hero of props.heroes) {
                if (!tempHeroes.includes(hero)) { tempHeroes.push(hero) }
            }
            for (let villain of props.villains) {
                if (!tempVillains.includes(villain)) { tempVillains.push(villain) }
            }
            for (let antihero of props.antiheroes) {
                if (!tempHeroes.includes(antihero)) { tempHeroes.push(antihero) }
                if (!tempVillains.includes(antihero)) { tempVillains.push(antihero) }
            }
            props.setHeroesChecked(tempHeroes)
            props.setVillainsChecked(tempVillains)
        }
    }

    const handleSetToggleWithLocations = () => {
        let tempHeroes = [...props.heroesChecked]
        let tempVillains = [...props.villainsChecked]
        let tempLocations = [...props.locationsChecked]
        if ((props.heroes.every(hero => props.heroesChecked.includes(hero))
            && props.villains.every(villain => props.villainsChecked.includes(villain))
            && props.antiheroes.every(antihero => props.heroesChecked.includes(antihero))
            && props.antiheroes.every(antihero => props.villainsChecked.includes(antihero))
            && props.locations.every(location => props.locationsChecked.includes(location)))) {
            for (let hero of props.heroes) {
                tempHeroes.splice(tempHeroes.indexOf(hero))
            }
            for (let villain of props.villains) {
                tempVillains.splice(tempVillains.indexOf(villain))
            }
            for (let location of props.locations) {
                tempLocations.splice(tempLocations.indexOf(location))
            }
            props.setHeroesChecked(tempHeroes)
            props.setVillainsChecked(tempVillains)
            props.setLocationsChecked(tempLocations)
        }
        else {

            for (let hero of props.heroes) {
                if (!tempHeroes.includes(hero)) { tempHeroes.push(hero) }
            }
            for (let villain of props.villains) {
                if (!tempVillains.includes(villain)) { tempVillains.push(villain) }
            }
            for (let antihero of props.antiheroes) {
                if (!tempHeroes.includes(antihero)) { tempHeroes.push(antihero) }
                if (!tempVillains.includes(antihero)) { tempVillains.push(antihero) }
            }
            for (let location of props.locations) {
                if (!tempLocations.includes(location)) { tempLocations.push(location) }
            }
            props.setHeroesChecked(tempHeroes)
            props.setVillainsChecked(tempVillains)
            props.setLocationsChecked(tempLocations)
        }
    }

    return (
        <div className="accordion-div">
            <Accordion disableGutters className="set-accordion" elevation={0} square sx={{ width: 420 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ height: "auto", backgroundColor: "#EEEEEE", borderStyle: "solid", borderWidth: 1, borderColor: "#DDDDDD" }}
                >
                    <ListItemAvatar><Avatar variant="square" src={props.image} /></ListItemAvatar>
                    <Typography sx={{ marginTop: 0.9 }}>{props.title}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: 0 }}>
                    <List sx={{ padding: 0 }}>
                        {props.heroes.length >= 1 ? (<ListSubheader sx={{ padding: 0.7, lineHeight: 1, color: "white", backgroundColor: "darkblue" }}>Heroes</ListSubheader>)
                            : <></>}
                        {props.heroes.map((hero) => (
                            <MemoizedSetItem
                                key={hero.name}
                                entry={hero}
                                // name={hero.name}
                                // image={hero.image}
                                checked={props.heroesChecked}
                                setChecked={props.setHeroesChecked}
                                type="hero"
                            >
                            </MemoizedSetItem>
                        ))}
                        {props.villains.length >= 1 ?
                            (<> <ListSubheader sx={{ padding: 0.7, lineHeight: 1, color: "white", backgroundColor: "darkred" }}>Villains</ListSubheader> </>)
                            : <></>}
                        {props.villains.map((villain) => (
                            <MemoizedSetItem
                                key={villain.name}
                                entry={villain}
                                // name={villain.name}
                                // image={villain.image}
                                checked={props.villainsChecked}
                                setChecked={props.setVillainsChecked}
                                type="villain"
                            >
                            </MemoizedSetItem>
                        ))}
                        {props.antiheroes.length >= 1 ?
                            (<> <ListSubheader sx={{ padding: 0.7, lineHeight: 1, color: "white", backgroundColor: "purple" }}>Antiheroes</ListSubheader> </>)
                            : <></>}
                        {props.antiheroes.map((antihero) => (
                            <MemoizedAntiheroSetItem
                                key={antihero.name}
                                entry={antihero}
                                // name={antihero.name}
                                // image={antihero.image}
                                heroesChecked={props.heroesChecked}
                                setHeroesChecked={props.setHeroesChecked}
                                villainsChecked={props.villainsChecked}
                                setVillainsChecked={props.setVillainsChecked}
                            >
                            </MemoizedAntiheroSetItem>
                        ))}
                        {props.locations.length >= 1 && props.locationsOption === true ?
                            (<>
                                <ListSubheader sx={{ padding: 0.7, lineHeight: 1, color: "white", backgroundColor: "dimgray" }}>Locations</ListSubheader>
                                {props.locations.map((location) => (
                                    <MemoizedSetItem
                                        key={location.name}
                                        entry={location}
                                        // name={location.name}
                                        checked={props.locationsChecked}
                                        setChecked={props.setLocationsChecked}
                                        type="location"
                                    >
                                    </MemoizedSetItem>
                                ))}
                            </>) : <></>}
                    </List>
                </AccordionDetails>
            </Accordion>
            <div className="checkbox-all-container">
                {props.locationsOption === true ? (
                    <Checkbox
                        className="set-checkbox"
                        onChange={handleSetToggleWithLocations}
                        sx={{ marginTop: 1.5 }}
                        checked={(props.heroes.every(hero => props.heroesChecked.includes(hero))
                            && props.villains.every(villain => props.villainsChecked.includes(villain))
                            && props.antiheroes.every(antihero => props.heroesChecked.includes(antihero))
                            && props.antiheroes.every(antihero => props.villainsChecked.includes(antihero))
                            && props.locations.every(location => props.locationsChecked.includes(location)))}
                    ></Checkbox>
                ) : (
                    <Checkbox
                        className="set-checkbox"
                        onChange={handleSetToggle}
                        sx={{ marginTop: 1.5 }}
                        checked={(props.heroes.every(hero => props.heroesChecked.includes(hero))
                            && props.villains.every(villain => props.villainsChecked.includes(villain))
                            && props.antiheroes.every(antihero => props.heroesChecked.includes(antihero))
                            && props.antiheroes.every(antihero => props.villainsChecked.includes(antihero)))}
                    ></Checkbox>
                )}
            </div>
        </div>
    )
}
export const MemoizedSet = React.memo(Set)