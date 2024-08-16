import { useState } from 'react'

const SearchBar = ({ onSubmit }) => {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term)
    };

    const handleChange =(event) => {
        setTerm(event.target.value)
    };  

    return(
    <div>
        <form onSubmit ={handleFormSubmit}>
          <label>Enter State</label>
          <input value ={term} onChange ={handleChange}></input>
        </form>
    </div>
    )
}

export default SearchBar;