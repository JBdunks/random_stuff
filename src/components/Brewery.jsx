const Brewery = ({ name, street, city, zip, state, web, type, phone}) => {

    return(
        <div>
            <h3>{name}</h3>
            <p>{street}</p>
            <p>{city},{state} {zip}</p>
        </div>
    )
}

export default Brewery