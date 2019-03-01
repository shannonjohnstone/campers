import axios from 'axios';

// TODO: replace url with .env values
const fetchTotalCampers = query =>
  axios.get(`localhost:3001/campers/total${query}`);

const fetchTotalForMonthCampers = query =>
  axios.get(`localhost:3001/campers/total/month${query}`);

export { fetchTotalCampers, fetchTotalForMonthCampers };
