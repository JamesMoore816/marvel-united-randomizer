import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
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

    const handleSetToggle = () => {
        let tempHeroes = [...props.heroesChecked]
        let tempVillains = [...props.villainsChecked]
        if ((props.heroes.every(hero => props.heroesChecked.includes(hero))
            && props.villains.every(villain => props.villainsChecked.includes(villain))
            && props.antiheroes.every(antihero => props.heroesChecked.includes(antihero))
            && props.antiheroes.every(antihero => props.villainsChecked.includes(antihero)))) {
            for (let hero of props.heroes) {
                tempHeroes.splice(tempHeroes.indexOf(hero), 1)
            }
            for (let villain of props.villains) {
                tempVillains.splice(tempVillains.indexOf(villain), 1)
            }
            for (let hero of props.antiheroes) {
                tempVillains.splice(tempVillains.indexOf(hero), 1)
            }
            for (let villain of props.antiheroes) {
                tempVillains.splice(tempVillains.indexOf(villain), 1)
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
                tempHeroes.splice(tempHeroes.indexOf(hero), 1)
            }
            for (let villain of props.villains) {
                tempVillains.splice(tempVillains.indexOf(villain), 1)
            }
            for (let location of props.locations) {
                tempLocations.splice(tempLocations.indexOf(location), 1)
            }
            for (let hero of props.antiheroes) {
                tempVillains.splice(tempVillains.indexOf(hero), 1)
            }
            for (let villain of props.antiheroes) {
                tempVillains.splice(tempVillains.indexOf(villain), 1)
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
            <Accordion disableGutters className="set-accordion" elevation={0} square sx={{ width: 420, paddingBottom:0.5 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color:"white", backgroundColor:"#444444", borderRadius:"100%"}}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ height: "65px", backgroundImage:`url(${props.banner})`, backgroundSize:"100%", backgroundPosition:"0 -40px, 0 0", backgroundOpacity:"50%", borderStyle: "solid", borderWidth: 1, borderColor: "#BBBBBB" }}
                >
                    {/* <ListItemAvatar><Avatar variant="square" src={props.image} /></ListItemAvatar> */}
                    <Typography sx={{color:"white", fontSize:"20px", backgroundColor:"black", padding:"0px 6px 3px 6px" }}>{props.title}</Typography>
                    {/* <img className="set-logo" src={props.logo} alt={props.title}/> */}
                </AccordionSummary>
                <AccordionDetails sx={{ padding: 0 }}>
                    <List sx={{ padding: 0 }}>
                        {props.heroes.length >= 1 ? (<ListSubheader sx={{ padding: 0.7, lineHeight: 1, color: "white", backgroundColor: "darkblue" }}>Heroes</ListSubheader>)
                            : <></>}
                        {props.heroes.map((hero) => (
                            <MemoizedSetItem
                                key={hero.name}
                                entry={hero}
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