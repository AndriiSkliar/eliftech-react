import { useParams } from "react-router-dom";
import { Title } from "../../components/Title/Title";

const ParticipantAccentPage = () => {
  const { id } = useParams();
  console.log(id);
  
  return (
    <div>
      <Title title="Selected event of the participants"/>
    </div>
  );
};

export default ParticipantAccentPage;
