import { Link } from "react-router-dom";

export const EventCard = ({ event}) => {
  const { description, event_date, organizer, title, _id } = event;
  
  return (
    <div>
        <h3>{title}</h3>
        <p>{event_date}</p>
        <p>{organizer}</p>
        <p>{description}</p>
        <Link to="/registration">Register</Link>
        <Link to={`/participants/${_id}`}>View</Link>
    </div>
  )
}
