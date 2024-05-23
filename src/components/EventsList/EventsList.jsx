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
  const [sortCriteria, setSortCriteria] = useState('hide');
  const [loading, setLoading] = useState(false);
  const limit = 12;
  
  const fetchData = async () => {
    setLoading(true);
    const data = await fetchEventsData(page, limit);

    if (data.length === 0) { 
      setHasMore(false);
    } else {
      setEvents(prevEvents => [...prevEvents, ...data]); 
      setPage(prevPage => prevPage + 1);

      localStorage.setItem('events', JSON.stringify([...events, ...data]));
    }
    setLoading(false);
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
    <>
    {loading && <Loader />}
    <InfiniteScroll
      dataLength={events.length}
      next={fetchData}
      hasMore={hasMore}
      endMessage={<p className={css.eventsText}>No more data to load</p>}

    >
      {events.length > 0 && <select className={css.eventsSelect} onChange={(e) => setSortCriteria(e.target.value)} value={sortCriteria}>
        <option value='hide'>Sort events by:</option>
        <option value="title">Title</option>
        <option value="event_date">Event Date</option>
        <option value="organizer">Organizer</option>
      </select>}
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
