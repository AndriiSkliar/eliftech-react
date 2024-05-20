import { Contacts } from "./Contacts/Contacts";
import { Logo } from "./Logo/Logo";
import { NavMenu } from "./NavMenu/NavMenu";
import css from './Header.module.css';

export const Header = () => {

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Logo />
        <NavMenu/>
      </nav>
      <Contacts/>
    </header>
  );
};
