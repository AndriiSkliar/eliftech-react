import { NavLink } from "react-router-dom";

export const NavMenu = () => {
  return (
    <ul>
        <li>
            <NavLink to="/events">Events</NavLink>
        </li>
        <li>
            <NavLink to="/registration">Registration</NavLink>
        </li>
        <li>
            <NavLink to="/participants">Participants</NavLink>
        </li>
    </ul>
  );
};
