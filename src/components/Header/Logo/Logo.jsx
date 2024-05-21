import { Link } from 'react-router-dom';
import css from './Logo.module.css';

export const Logo = () => {
  return (
    <Link to="/events" className={css.logo}>
      <img src="/logo.jpg" alt="Eliftech Logo" style={{ height: '40px' }} />
      <span className={css.logoText}>Eliftech</span>
    </Link>
  );
};