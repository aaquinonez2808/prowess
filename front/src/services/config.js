import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.countrystatecity.in/v1',
    headers: {
        'X-CSCAPI-KEY': 'API_KEY'
    },
    options: {
        redirect: 'follow'
    }
  });

  export default instance