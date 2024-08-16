import { useState } from 'react';
import { byState, byCity} from './api';
import SearchBar from './components/SearchBar';
import BreweryList from './components/BreweryList';

function App() {
  const [brewery, setBrewery] = useState([]);

  const handleSubmitState = async (term) => {
    const result = await byState(term)
    setBrewery(result)
  }

  const handleSubmitCity = async (term) => {
    const result = await byCity(term)
    setBrewery(result)
  }

  return (
    <div>
      <SearchBar onSubmitState = {handleSubmitState} onSubmitCity = {handleSubmitCity} />
      <BreweryList brewery ={brewery} />
    </div>
  )
}

export default App
