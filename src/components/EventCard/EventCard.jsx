import { Link } from "react-router-dom";
import css from './EventCard.module.css';

export const EventCard = ({ event}) => {
  const { description, event_date, organizer, title, _id } = event;
  
  return (
    <>
      <h3>{title}</h3>
      <p>event date: <span className={css.eventCardAccent}>{event_date}</span></p>
      <p>organizer: <span className={css.eventCardAccent}>{organizer}</span></p>
      <p>{description}</p>
      <div className={css.eventCardNav}>
        <Link className={css.eventCardLink} to="/registration">Register</Link>
        <Link className={css.eventCardLink} to={`/participants/${_id}`}>View</Link>
      </div>
    </>
  )
}
