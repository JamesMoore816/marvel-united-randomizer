import './App.css';
import { data } from './data.js';
import Set from './components/Set'
import MemoizedSet from './components/Set'
import MemoizedOptionsMenu from './components/OptionsMenu'
import Results from './components/Results'
import { useState, useEffect } from 'react'
import OptionsMenu from './components/OptionsMenu'
import { Button, Tooltip, ClickAwayListener, List, ListItem, ListItemText, Typography } from '@mui/material';

function App() {
  const [heroesChecked, setHeroesChecked] = useState([1])
  const [villainsChecked, setVillainsChecked] = useState([1])
  const [locationsChecked, setLocationsChecked] = useState([1])
  const [locationsOption, setLocationsOption] = useState(false)
  const [allowDupes, setAllowDupes] = useState(false)
  const [numHeroes, setNumHeroes] = useState("2")
  const [view, setView] = useState("main")
  const [heroesResults, setHeroesResults] = useState([])
  const [villainResults, setVillainResults] = useState([])
  const [locationsResults, setLocationsResults] = useState([])

  const [open, setOpen] = useState(false);
  const handleTooltipClose = () => {
    setOpen(false);
  };
  const handleTooltipOpen = () => {
    setOpen(true);
  };

  console.log(data[0].sets)

  useEffect(() => {
    for (let i=0; i < data[0].sets.length; i++) {
      data[0].sets[i].heroes.every(object => object["set"] = data[0].sets[i].title)
      data[0].sets[i].villains.every(object => object["set"] = data[0].sets[i].title)
      data[0].sets[i].locations.every(object => object["set"] = data[0].sets[i].title)
      data[0].sets[i].antiheroes.every(object => object["set"] = data[0].sets[i].title)
    }
    console.log(data[0].sets)
    console.log("use effect runs")
  }, []
  )

  const handleSubmit = () => {
    if (heroesChecked.length > parseInt(numHeroes) + 1 && villainsChecked.length > 1) {
      let shuffledHeroes = heroesChecked.slice(1, heroesChecked.length).sort(() => Math.random() - 0.5)
      let shuffledVillains = villainsChecked.slice(1, villainsChecked.length).sort(() => Math.random() - 0.5)
      let tempHeroes = []
      let tempVillain = []
      let tempLocations = []

      tempVillain.push(shuffledVillains[0])

      for (let i = 0; i < numHeroes; i++) {
        tempHeroes.push(shuffledHeroes[i])
      }

      if (locationsOption === true) {
        if (locationsChecked.length < 7) {
          handleTooltipOpen()
          console.log("not enough locations")
          return "error/exit"
        }
        let shuffledLocations = locationsChecked.slice(1, locationsChecked.length).sort(() => Math.random() - 0.5)
        for (let i = 0; i < 6; i++) {
          tempLocations.push(shuffledLocations[i])
        }
      }
      setVillainResults(tempVillain)
      setHeroesResults(tempHeroes)
      setLocationsResults(tempLocations)
      setView("results")
      console.log(tempVillain)
      console.log(tempHeroes)
      console.log(tempLocations)
    }
    else handleTooltipOpen()
  }

  return (
    <>
      <div className="App">
        <h1>Marvel United Randomizer</h1>
        {view === "main" ? (
          <div className="main-menu-container">
            <MemoizedOptionsMenu
              locationsOption={locationsOption}
              setLocationsOption={setLocationsOption}
              allowDupes={allowDupes}
              setAllowDupes={setAllowDupes}
              numHeroes={numHeroes}
              setNumHeroes={setNumHeroes}
              handleSubmit={handleSubmit}
            />
            <ClickAwayListener onClickAway={handleTooltipClose}>
              <div>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  onClose={handleTooltipClose}
                  open={open}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="right"
                  title="Add more data!"
                >
                  <Button variant="contained" sx={{ marginBottom: 2 }} onClick={() => { handleSubmit() }}>Randomize!</Button>
                </Tooltip>
              </div>
            </ClickAwayListener>
            {data[0].sets.map((set) => (
              <MemoizedSet
                key={set.title}
                title={set.title}
                image={set.image}
                heroes={set.heroes}
                villains={set.villains}
                locations={set.locations}
                antiheroes={set.antiheroes}
                heroesChecked={heroesChecked}
                setHeroesChecked={setHeroesChecked}
                villainsChecked={villainsChecked}
                setVillainsChecked={setVillainsChecked}
                locationsChecked={locationsChecked}
                setLocationsChecked={setLocationsChecked}
                locationsOption={locationsOption}
              />
            ))}
          </div>) : (
          <>
          <div className="results-container">
            <Results
              locationsOption={locationsOption}
              heroesResults={heroesResults}
              villainResults={villainResults}
              locationsResults={locationsResults}
            />
            <Button variant="contained" sx={{marginRight:1}} onClick={() => { handleSubmit() }}>Randomize Again</Button>
            <Button variant="contained" sx={{marginLeft:1}} onClick={() => { setView("main") }}>Go Back</Button>
          </div>
          </>)}
      </div>
    </>
  );
}

export default App;
