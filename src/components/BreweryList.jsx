import Brewery from './Brewery'

const BreweryList = ({ brewery }) => {
    const renderedBrewery  = brewery.map((brew) =>{
        return(
            <Brewery 
            key ={brew.id}
            name = {brew.name}
            street = {brew.street}
            city = {brew.city}
            zip = {brew.postal_code}
            state = {brew.state}
            web = {brew.website_url}
            type = {brew.brewery_type}
            phone = {brew.phone}
            />
        )
    })
    return <>{renderedBrewery}</>
}

export default BreweryList;