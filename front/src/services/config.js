import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://battuta.medunes.net/api/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'proxy': {
            'host': 'localhost',
            'port': 3000
        }
    }
  });

  export default instance