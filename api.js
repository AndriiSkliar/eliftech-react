import axios from 'axios';

const BASE_URL = 'https://eliftech-node.onrender.com/api';

export const fetchEventsData = async () => {
  try {
    const resp = await axios.get(`${BASE_URL}/events`);
    const data = resp.data;
    return data;
  } catch (error) {
    console.error('Error fetching events:', error);
  }
};
