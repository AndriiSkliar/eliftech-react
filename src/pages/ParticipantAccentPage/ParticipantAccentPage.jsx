import { useParams } from "react-router-dom";
import { Title } from "../../components/Title/Title";
import { ParticipantsList } from "../../components/ParticipantsList/ParticipantsList";

const ParticipantAccentPage = () => {
  const { id } = useParams();
  
  return (
    <div>
      <Title title="Selected event of the participants" />
      <ParticipantsList id={id} />
    </div>
  );
}

export default ParticipantAccentPage
