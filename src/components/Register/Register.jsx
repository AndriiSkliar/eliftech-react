import { useEffect, useState } from "react"
import { RegisterForm } from "../Form/Form"
import { fetchEventsData } from "../../../api";
import { Loader } from '../Loader/Loader';

export const Register = () => {
  const [formData, setFormData] = useState(null);
  const [events, setEvents] = useState([]);
  console.log('formData: ', formData);

  useEffect(() => {
    const fetchData = async () => {
      const storedEvents = localStorage.getItem('events');
      const page = 1;
      const limit = 50;

      if (storedEvents) {
        const parsedEvents = JSON.parse(storedEvents);

        if (parsedEvents.length >= limit) {
          const filteredParsedEvents = parsedEvents.map(({ title, _id }) => ({ title, _id }));
          setEvents(filteredParsedEvents);
        } else {
          const data = await fetchEventsData(page, limit);
          const filteredData = data.map(({ title, _id }) => ({ title, _id }));
          localStorage.setItem('events', JSON.stringify(filteredData));
          setEvents(filteredData);
        }
      } else {
        const data = await fetchEventsData(page, limit);
        const filteredData = data.map(({ title, _id }) => ({ title, _id }));
        localStorage.setItem('events', JSON.stringify(filteredData));
        setEvents(filteredData);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {events.length < 0 && <Loader/>}
      {events.length > 0 && <RegisterForm setFormData={setFormData} events={events} />}
    </div>
  )
}

