import { useState } from 'react';
import {byState} from './api';
import SearchBar from './components/SearchBar';
import BreweryList from './components/BreweryList';

function App() {
  const [brewery, setBrewery] = useState([]);

  const handleSubmit = async (term) => {
    const result = await byState(term)
    setBrewery(result)
  }

  return (
    <div>
      <SearchBar onSubmit = {handleSubmit} />
      <BreweryList brewery ={brewery} />
    </div>
  )
}

export default App
