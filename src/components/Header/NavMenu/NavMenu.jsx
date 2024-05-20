import { NavLink } from "react-router-dom";
import css from './NavMenu.module.css';

export const NavMenu = () => {
  return (
    <ul className={css.headerNavList}>
        <li className={css.headerNavItem}>
            <NavLink to="/events" className={({isActive}) => `${css.headerNavLink} ${isActive ? css.active : ''}`}>Events</NavLink>
        </li>
        <li className={css.headerNavItem}>
            <NavLink to="/registration" className={({isActive}) => `${css.headerNavLink} ${isActive ? css.active : ''}`}>Registration</NavLink>
        </li>
        <li className={css.headerNavItem}>
            <NavLink to="/participants" className={({isActive}) => `${css.headerNavLink} ${isActive ? css.active : ''}`}>Participants</NavLink>
        </li>
    </ul>
  );
};
