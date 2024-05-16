// import { ReactComponent as IconCat } from 'assets/icons/cat.svg'
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/events">
        <span>Eliftech</span>
    </Link>
  );
};