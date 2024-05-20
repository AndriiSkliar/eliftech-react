import { Link } from "react-router-dom";

export const EventCard = ({ event}) => {
  const { description, event_date, organizer, title, _id } = event;
  
  return (
    <>
      <h3>title: {title}</h3>
      <p>event date: {event_date}</p>
      <p>organizer: {organizer}</p>
      <p>description: {description}</p>
      <Link to="/registration">Register</Link>
      <Link to={`/participants/${_id}`}>View</Link>
    </>
  )
}
