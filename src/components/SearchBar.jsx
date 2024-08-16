import { useState } from 'react'

const SearchBar = ({ onSubmitState, onSubmitCity }) => {
    const [termState, setTermState] = useState('');
    const [termCity, setTermCity] = useState('');

    const handleFormSubmitState = (event) => {
        event.preventDefault();
        setTermCity('')
        onSubmitState(termState)
    };

    const handleChangeState =(event) => {
        setTermState(event.target.value)
    };  

    const handleFormSubmitCity = (event) => {
        event.preventDefault();
        setTermState('')
        onSubmitCity(termCity)
    };

    const handleChangeCity =(event) => {
        setTermCity(event.target.value)
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