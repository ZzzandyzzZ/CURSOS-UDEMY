import axios from 'axios';
import { getEnvVars } from '../helpers/getEnvVars';

const { VITE_API_URL } = getEnvVars();
const calendarApi = axios.create({
  baseURL: VITE_API_URL,
});

export { calendarApi };
