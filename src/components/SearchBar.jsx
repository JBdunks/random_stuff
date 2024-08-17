import { useState } from 'react'

const SearchBar = ({ onSubmit }) => {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term)
        setTerm('')
    };

    const handleChange =(event) => {
        setTerm(event.target.value)
    };  

    return(
    <div>
        <form onSubmit ={handleFormSubmit}>
          <label>Enter State or City: </label>
          <input value ={term} onChange ={handleChange}></input>
        </form>
    </div>
    )
}

export default SearchBar;