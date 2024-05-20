import { EventsList } from "../../components/EventsList/EventsList";
import { Title } from "../../components/Title/Title";
import css from './EventsPage.module.css';

const EventsPage = () => {
  return (
    <div>
      <h1 className={css.title}>Events by Eliftech</h1>
      <Title title="Events"/>
      <EventsList />
    </div>
  );
};

export default EventsPage;