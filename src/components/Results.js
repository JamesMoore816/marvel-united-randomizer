import { List, ListItem, ListSubheader, ListItemText, Divider } from '@mui/material';
import React from 'react'

export default function Results(props) {
    return (
        <List className="results-list">
            <div className="hero-results-list">
            <ListSubheader sx={{ padding: 0.7, lineHeight: 1, color: "white", backgroundColor: "darkblue" }}>Heroes</ListSubheader>
                {props.heroesResults.map((hero) => (
                    <React.Fragment key={`result-${hero.name}`}>
                    <ListItem 
                    sx={{ backgroundImage:`url(${hero.image}), url(${"blue-grad.svg"})`, backgroundRepeat:"no-repeat, repeat", backgroundPosition:"0 -15px, 0 0", backgroundSize:"21%, 100%" }}
                    className="hero-result">
                        <ListItemText primary={hero.name} secondary={hero.set} sx={{marginLeft: 10}}/>
                    </ListItem>
                    <Divider />
                    </React.Fragment>
                ))}
            </div>
            <div className="villain-results-list">
            <ListSubheader sx={{ padding: 0.7, lineHeight: 1, color: "white", backgroundColor: "darkred" }}>Villain</ListSubheader>
                <ListItem className="villain-result"
                    sx={{ backgroundImage:`url(${props.villainResults[0].image}), url(${"red-grad.svg"})`, backgroundRepeat:"no-repeat, repeat", backgroundPosition:"0 -15px, 0 0", backgroundSize:"21%, 100%" }}>
                    <ListItemText primary={props.villainResults[0].name} secondary={props.villainResults[0].set} sx={{marginLeft: 10}}/></ListItem>
                    <Divider />
            </div>
            {props.locationsOption === true ? (
                <div className="location-results-list">
                    <ListSubheader sx={{ padding: 0.7, lineHeight: 1, color: "white", backgroundColor: "dimgray" }}>Locations</ListSubheader>
                    {props.locationsResults.map((location) => (
                        <React.Fragment key={`result-${location.name}`}>
                        <ListItem
                        sx={{ backgroundImage:`url(${location.image}), url(${"gray-grad.svg"})`, backgroundRepeat:"no-repeat, repeat", backgroundPosition:"0 -15px, 0 0", backgroundSize:"21%, 100%" }}
                        className="location-result" key={`result-${location.name}`}>
                            <ListItemText primary={location.name} secondary={location.set} sx={{marginLeft: 10}}/>
                        </ListItem>
                        <Divider />
                        </React.Fragment>
                    ))}
                </div>) : (<></>)}
        </List>
    )
}