import { EventsList } from "../../components/EventsList/EventsList";
import { Title } from "../../components/Title/Title";

const EventsPage = () => {
  return (
    <div>
      <h1>Events by Eliftech</h1>
      <Title title="Events"/>
      <EventsList/>
    </div>
  );
};

export default EventsPage;