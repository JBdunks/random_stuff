import { useState } from 'react'

const SearchBar = ({ onSubmitState, onSubmitCity }) => {
    const [termState, setTermState] = useState('');
    const [termCity, setTermCity] = useState('');

    const handleFormSubmitState = (event) => {
        event.preventDefault();
        onSubmitState(termState)
    };

    const handleChangeState =(event) => {
        setTermState(event.target.value)
    };  

    const handleFormSubmitCity = (event) => {
        event.preventDefault();
        console.log('handleformcity')
        onSubmitCity(termCity)
    };

    const handleChangeCity =(event) => {
        setTermCity(event.target.value)
        console.log('handlecity')
    }

    return(
    <div>
        <form onSubmit ={handleFormSubmitState}>
          <label>Enter State</label>
          <input value ={termState} onChange ={handleChangeState}></input>
        </form>

        <form onSubmit ={handleFormSubmitCity}>
          <label>Enter City</label>
          <input value ={termCity} onChange ={handleChangeCity}></input>
        </form>
    </div>
    )
}

export default SearchBar;