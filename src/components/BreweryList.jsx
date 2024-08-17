import Brewery from './Brewery'
import Button from 'react-bootstrap/Button';
import BrewModal from './BrewModal'
import { phoneFormat } from '../api'


const BreweryList = ({ brewery }) => {
    const renderedBrewery  = brewery.map((brew) =>{
        return(
            <BrewModal
            key ={brew.id}
            name = {brew.name}
            street = {brew.street ? brew.street : 'n/a'}
            city = {brew.city}
            zip = {brew.postal_code.slice(0,5)}
            state = {brew.state}
            web = {brew.website_url}
            type = {brew.brewery_type.charAt(0).toUpperCase() + brew.brewery_type.slice(1)}
            phone = {brew.phone ? phoneFormat(brew.phone) : 411}
            />
        )
    })
    return (
    <div>
    <div>{renderedBrewery}</div>
    </div>
    )
}

export default BreweryList;