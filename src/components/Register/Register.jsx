import { useEffect, useState } from "react"
import { RegisterForm } from "../Form/Form"
import { Loader } from '../Loader/Loader';
import { filteredParsedEvents, processAndStoreEvents } from "./utils";
import { createNewParticipant } from "../../../api";
import css from './Register.module.css';

export const Register = () => {
  const [formData, setFormData] = useState(null);
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const storedEvents = localStorage.getItem('events');
      const limit = 50;

      if (storedEvents) {
        const parsedEvents = JSON.parse(storedEvents);

        if (parsedEvents.length >= limit) {
          setEvents(filteredParsedEvents(parsedEvents));
        } else {
          setEvents(await processAndStoreEvents(limit, setIsLoading));
        }
      } else {
        setEvents(await processAndStoreEvents(limit, setIsLoading));
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const submitFormData = async () => {
      if (formData) { 
        setIsLoading(true);
        await createNewParticipant(formData);
        setIsLoading(false);
      }
    }

    submitFormData();
  }, [formData]);
  
  return (
    <div className={css.formContainer}>
      {isLoading && <Loader/>}
      {events.length > 0 && <RegisterForm setFormData={setFormData} events={events} />}
    </div>
  )
}

