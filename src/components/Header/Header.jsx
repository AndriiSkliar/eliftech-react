import { Link } from 'react-router-dom';

export const Header = () => {

  return (
    <Header>
      <nav>
        <Link to="/first">
          First
        </Link>
        <Link to="/second">
          Second
        </Link>
      </nav>
    </Header>
  );
};
