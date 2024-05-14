import { Link } from 'react-router-dom';

export const Header = () => {

  return (
    <div>
      <nav>
        <Link to="/first">
          First
        </Link>
        <Link to="/second">
          Second
        </Link>
      </nav>
    </div>
  );
};
