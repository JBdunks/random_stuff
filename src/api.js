import axios from 'axios';

export const search = async (term) => {
  const response = await axios.get (`https://api.openbrewerydb.org/v1/breweries/search?query=${term}&page=1&per_page=50`)
  console.log(response.data)
  return response.data
}

export const phoneFormat = (p) => {
return p.slice(0,3)+"-"+p.slice(3,6)+"-"+p.slice(6,15);
}


