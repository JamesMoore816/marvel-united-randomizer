import './App.css';
import { data } from './data.js';
import Set from './components/Set'
import MemoizedSet from './components/Set'
import MemoizedOptionsMenu from './components/OptionsMenu'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react'
import OptionsMenu from './components/OptionsMenu'

function App() {
  const [heroesChecked, setHeroesChecked] = useState([1])
  const [villainsChecked, setVillainsChecked] = useState([1])
  const [locationsChecked, setLocationsChecked] = useState([1])
  const [locationsOption, setLocationsOption] = useState(false)
  const [allowDupes, setAllowDupes] = useState(false)
  const [numHeroes, setNumHeroes] = useState("2")

  console.log(data[0].sets)

  const handleSubmit = () => {
    if (heroesChecked.length > parseInt(numHeroes) + 1 && villainsChecked.length > 1) {
      let shuffledHeroes = heroesChecked.sort(() => Math.random() - 0.5)
      let shuffledVillains = villainsChecked.sort(() => Math.random() - 0.5)
      let randomResults = []

      for (let villain of shuffledVillains) {
        if (villain !== 1 && randomResults.length === 0) randomResults.push(villain)
      }
      for (let hero of shuffledHeroes) {
        if (hero !== 1 && !randomResults.includes(hero) && randomResults.length <= parseInt(numHeroes)) randomResults.push(hero)
      }
      if (locationsOption === true) {
        let shuffledLocations = locationsChecked.sort(() => Math.random() - 0.5)
        for (let location of shuffledLocations) {
          if (location !== 1 && !randomResults.includes(location) && randomResults.length <= parseInt(numHeroes)+6) randomResults.push(location)
        }
      }
      console.log(randomResults)
    }
  }


  return (
    <>
      <div className="App">
        <h1>Marvel United Randomizer</h1>
        <MemoizedOptionsMenu
          locationsOption={locationsOption}
          setLocationsOption={setLocationsOption}
          allowDupes={allowDupes}
          setAllowDupes={setAllowDupes}
          numHeroes={numHeroes}
          setNumHeroes={setNumHeroes}
          handleSubmit={handleSubmit}
        />
        <Button></Button>
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
      </div>
    </>
  );
}

export default App;
