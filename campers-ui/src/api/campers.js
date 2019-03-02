import axios from 'axios';

// TODO: replace url with .env values
const fetchTotalCampers = (query = '') =>
  axios.get(`http://localhost:3001/campers/points/total${query}`);

const fetchTotalForMonthCampers = (query = '') =>
  axios.get(`http://localhost:3001/campers/points/total/month${query}`);

export { fetchTotalCampers, fetchTotalForMonthCampers };
