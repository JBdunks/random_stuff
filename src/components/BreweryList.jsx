import Brewery from './Brewery'
import Button from 'react-bootstrap/Button';


const BreweryList = ({ brewery }) => {
    const renderedBrewery  = brewery.map((brew) =>{
        return(
            <Brewery 
            key ={brew.id}
            name = {brew.name}
            street = {brew.street ? brew.street : 'n/a'}
            city = {brew.city}
            zip = {brew.postal_code.slice(0,5)}
            state = {brew.state}
            web = {brew.website_url}
            type = {brew.brewery_type}
            phone = {brew.phone ? brew.phone : 'n/a'}
            />
        )
    })
    return (
    <>
    <div>
        <Button variant="primary">Primary</Button>
        <Button variant="primary">Primary</Button>
    </div>
    
    {renderedBrewery}
    </>
    )
}

export default BreweryList;