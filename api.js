import axios from 'axios';

const BASE_URL = 'https://eliftech-node.onrender.com/api';

export const fetchEventsData = async (page, limit) => {
  try {
    const resp = await axios.get(
      `${BASE_URL}/events?page=${page}&limit=${limit}`
    );
    const data = resp.data;
    return data;
  } catch (error) {
    console.error('Error fetching events:', error);
  }
};

export const createNewParticipant = async (participant) => {
  try {
    const resp = await axios.post(
      `${BASE_URL}/participants/registers`,
      participant
    );
    const data = resp.data;
    return data;
  } catch (error) {
    console.error('Error fetching events:', error);
  }
};

export const fetchParticipants = async () => {
  try {
    const resp = await axios.get(`${BASE_URL}/participants`);
    const data = resp.data;
    return data;
  } catch (error) {
    console.error('Error fetching events:', error);
  }
};

export const fetchEventRegistrations = async (id) => {
  console.log(typeof id);
  try {
    const resp = await axios.get(`${BASE_URL}/participants/${id}`);
    const data = resp.data;
    return data;
  } catch (error) {
    console.error('Error fetching events:', error);
  }
};
