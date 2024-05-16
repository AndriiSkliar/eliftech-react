import { Contacts } from "./Contacts/Contacts";
import { Logo } from "./Logo/Logo";
import { NavMenu } from "./Nav/Nav";

export const Header = () => {

  return (
    <header>
      <nav>
        <Logo />
        <NavMenu/>
      </nav>
      <Contacts/>
    </header>
  );
};
