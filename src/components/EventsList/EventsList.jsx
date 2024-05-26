import { useEffect, useState } from "react";
import { fetchEventsData } from "../../../api";
import { EventCard } from "../EventCard/EventCard";
import { Loader } from '../Loader/Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
import css from './EventsList.module.css';

export const EventsList = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [sort, setSort] = useState('');
  const [loading, setLoading] = useState(false);
  const limit = 12;
  
  const fetchData = async () => {
    setLoading(true);
    
    const data = await fetchEventsData(page, limit, sort);

    if (data.length === 0) { 
      setHasMore(false);
    } else {
      setEvents(prevEvents => [...prevEvents, ...data]); 
      setPage(prevPage => prevPage + 1);

      localStorage.setItem('events', JSON.stringify([...events, ...data]));
    }
    setLoading(false);
  };

  const sortHandler = (e) => { 
    setEvents([]);
    setPage(1);
    setHasMore(true);
    setSort(e.target.value);
  }

  useEffect(() => {
    fetchData(); 
  }, [sort]);
  
  return (
    <>
    {loading && <Loader />}
    <InfiniteScroll
      dataLength={events.length}
      next={fetchData}
      hasMore={hasMore}
      endMessage={<p className={css.eventsText}>No more data to load</p>}

    >
      {events.length > 0 && (
          <select 
            className={css.eventsSelect} 
            value={sort} 
            onChange={sortHandler}
          >
            <option value=''>Sort events by:</option>
            <option value="title">Title</option>
            <option value="event_date">Event Date</option>
            <option value="organizer">Organizer</option>
          </select>
        )}
        
      <ul className={css.eventsList}>
        {events.map((event) => (
          <li className={css.eventsItem} key={event._id}>
            <EventCard event={event} events={events} />
          </li>
        ))}
      </ul>
      </InfiniteScroll>
    </>
  )
}
