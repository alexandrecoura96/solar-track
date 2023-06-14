import {token} from '@env';
import axios from 'axios';

export const api = axios.create({
  baseURL:
    'https://y-plants-api.bravedesert-7b0b5672.westus2.azurecontainerapps.io',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
