import { useEffect, useState } from "react";
import axios from 'axios';

export const EventsList = () => {
    const [events, setEvents] = useState(null);
    const fetchData = async () => {
      try {
        const resp = await axios.get(`https://eliftech-node.onrender.com/api/events`);
        const data = resp.data;
        setEvents(data); 
      } catch (error) {
        console.error('Error fetching events:', error);
      }
  };
  
  useEffect(() => {
    fetchData(); 
  }, []); 
    
  return (
    <div>
      {!events && <p>Loading...</p>}
      <h3>ma</h3>
    </div>
  )
}
