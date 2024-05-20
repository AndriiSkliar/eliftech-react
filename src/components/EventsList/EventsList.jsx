import { useEffect, useState } from "react";
import { fetchEventsData } from "../../../api";
import { EventCard } from "../EventCard/EventCard";
import { Loader } from '../Loader/Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

export const EventsList = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [sortCriteria, setSortCriteria] = useState('hide');
  const limit = 12;
  
  const fetchData = async () => {
    setIsLoading(true);
    const data = await fetchEventsData(page, limit);

    if (data.length === 0) { 
      setHasMore(false);
    } else {
      setEvents(prevEvents => [...prevEvents, ...data]); 
      setPage(prevPage => prevPage + 1);

      localStorage.setItem('events', JSON.stringify([...events, ...data]));
    }
    
    setIsLoading(false);
  };

  const sortEvents = (criteria) => {
    const sortedEvents = [...events].sort((a, b) => {
      if (a[criteria] < b[criteria]) return -1;
      if (a[criteria] > b[criteria]) return 1;
      return 0;
    });

    setEvents(sortedEvents);
  };

  useEffect(() => {
    fetchData(); 
  }, []);

   useEffect(() => {
    if(sortCriteria !== 'hide'){
      sortEvents(sortCriteria);
    }
  }, [sortCriteria]);
  
  return (
    <InfiniteScroll
      dataLength={events.length}
      next={fetchData}
      hasMore={hasMore}
      loader={<Loader/>}
      endMessage={<p>No more data to load.</p>}
      style={{
        overflow: 'none',
      }}
    >
      {events && <select onChange={(e) => setSortCriteria(e.target.value)} value={sortCriteria}>
        <option value='hide'>Sort events by:</option>
        <option value="title">Title</option>
        <option value="event_date">Event Date</option>
        <option value="organizer">Organizer</option>
      </select>}
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <EventCard event={event} events={events} />
          </li>
        ))}
      </ul>
    </InfiniteScroll>
  )
}
