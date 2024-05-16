import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ParticipantAccentPage = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log(id); 
  }, [id]);

  return (
    <div>
      <h1>Страница участника с ID {id}</h1>
    </div>
  );
};

export default ParticipantAccentPage;
