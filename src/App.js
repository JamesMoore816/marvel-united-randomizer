import './App.css';
import { data } from './data.js';
import Set from './components/Set'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react'

function App() {
  const [heroesChecked, setHeroesChecked] = useState([1])
  const [villainsChecked, setVillainsChecked] = useState([1])
  const [locationsChecked, setLocationsChecked] = useState([1])
  const [antiheroesChecked, setAntiheroesChecked] = useState([1])

  console.log(data[0].sets)

  const handleSubmit = () => {
    console.log("Submit Clicked")
  }


  return (
    <>
    <div className="App">
      <h1>Marvel United Randomizer</h1>
    </div>
    {data[0].sets.map((set) => (
      <Set
        key={set.title}
        title={set.title}
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
        antiheroesChecked={antiheroesChecked}
        setAntiheroesChecked={setAntiheroesChecked}
        />
    ))}
    </>
    );
}

export default App;
