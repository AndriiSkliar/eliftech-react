import { Link } from "react-router-dom";

export const NavMenu = () => {
  return (
    <ul>
        <li>
            <Link to="/events">Events</Link>
        </li>
        <li>
            <Link to="/registration">Registration</Link>
        </li>
        <li>
            <Link to="/participants">Participants</Link>
        </li>
    </ul>
  );
};
