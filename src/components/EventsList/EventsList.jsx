import { useEffect, useState } from "react";
import { fetchEventsData } from "../../../api";
import { EventCard } from "../EventCard/EventCard";
import { Loader } from '../Loader/Loader';

export const EventsList = () => {
  const [events, setEvents] = useState(null);
  
  const fetchData = async () => {
    const data = await fetchEventsData();
    setEvents(data); 
  };
  
  useEffect(() => {
    fetchData(); 
  }, []); 
  
  return (
    <div>
      {!events && <Loader/>}
      {events && (
        <ul>
          {events.map((event) => (
            <li key={event._id}>
              <EventCard event={event} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
