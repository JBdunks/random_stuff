import axios from 'axios';

export const byState = async (state) => {
  const response = await axios.get (`https://api.openbrewerydb.org/v1/breweries?by_state=${state}&page=1&per_page=10`)
  console.log('state')
  console.log(response.data)
  return response.data
}

export const byCity = async (city) => {
  const response = await axios.get (`https://api.openbrewerydb.org/v1/breweries?by_city=${city}&page=1&per_page=10`)
  console.log('City')
  console.log(response.data)
  return response.data
}
