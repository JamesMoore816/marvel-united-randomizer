import './App.css';
import { data } from './data.js';
import Set from './components/Set'
import MemoizedSet from './components/Set'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react'

function App() {
  const [appHeroesChecked, setAppHeroesChecked] = useState([1])
  const [appVillainsChecked, setAppVillainsChecked] = useState([1])
  const [appLocationsChecked, setAppLocationsChecked] = useState([1])

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
      <MemoizedSet
        key={set.title}
        title={set.title}
        image={set.image}
        heroes={set.heroes}
        villains={set.villains}
        locations={set.locations}
        antiheroes={set.antiheroes}
        appHeroesChecked={appHeroesChecked}
        setAppHeroesChecked={setAppHeroesChecked}
        appVillainsChecked={appVillainsChecked}
        setAppVillainsChecked={setAppVillainsChecked}
        appLocationsChecked={appLocationsChecked}
        setAppLocationsChecked={setAppLocationsChecked}
        />
    ))}
    </>
    );
}

export default App;
