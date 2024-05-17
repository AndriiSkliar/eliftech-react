import { Title } from "../../components/Title/Title";
import { ParticipantsList } from "../../components/ParticipantsList/ParticipantsList";

const ParticipantsPage = () => {
  return (
    <div>
      <Title title='"Awesome events" participants' />
      <ParticipantsList/>
    </div>
  );
};

export default ParticipantsPage;
