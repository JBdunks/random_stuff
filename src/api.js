import axios from 'axios';

export const byState = async (state) => {
  const response = await axios.get (`https://api.openbrewerydb.org/v1/breweries?by_state=${state}&page=1&per_page=10`)
  console.log(response.data)
  return response.data
}

