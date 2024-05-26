import axios from 'axios';
import {
  showErrorToast,
  showSuccessToast,
} from './src/components/ErrorMessages/errorMessages';

const BASE_URL = 'https://eliftech-node.onrender.com/api';
// const BASE_URL = 'http://localhost:3000/api';

export const fetchEventsData = async (page, limit, sort) => {
  try {
    const resp = await axios.get(
      `${BASE_URL}/events?page=${page}&limit=${limit}&sort=${sort}`
    );
    const data = resp.data;
    return data;
  } catch (error) {
    showErrorToast(error.message);
  }
};

export const createNewParticipant = async (participant) => {
  try {
    const resp = await axios.post(
      `${BASE_URL}/participants/registers`,
      participant
    );
    const data = resp.data;
    showSuccessToast('New Participant Created!');
    return data;
  } catch (error) {
    showErrorToast(error.message);
  }
};

export const fetchParticipants = async () => {
  try {
    const resp = await axios.get(`${BASE_URL}/participants`);
    const data = resp.data;
    return data;
  } catch (error) {
    showErrorToast(error.message);
  }
};

export const fetchEventRegistrations = async (id) => {
  try {
    const resp = await axios.get(`${BASE_URL}/participants/${id}`);
    const data = resp.data;
    return data;
  } catch (error) {
    showErrorToast(error.message);
  }
};
