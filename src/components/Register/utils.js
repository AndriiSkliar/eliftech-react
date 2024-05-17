import { fetchEventsData } from '../../../api';

export const processAndStoreEvents = async (limit, setIsLoading) => {
  const page = 1;
  setIsLoading(true);
  const resp = await fetchEventsData(page, limit);
  const filteredData = filteredParsedEvents(resp);
  localStorage.setItem('events', JSON.stringify(filteredData));
  setIsLoading(false);

  return filteredData;
};

export const filteredParsedEvents = (data) => {
  return data.map(({ title, _id }) => ({ title, _id }));
};
