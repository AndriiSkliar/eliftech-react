import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
import { fetchEventRegistrations, fetchParticipants } from "../../../api";
import ParticipantCard from "../ParticipantCard/ParticipantCard";


export const ParticipantsList = ({id}) => {
  const [participants, setParticipants] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const fetchData = async () => {
    setIsLoading(true);
    const data = id ? await fetchEventRegistrations(id) : await fetchParticipants();
    setParticipants(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(); 
  }, []);
    
  return (
    <div>
        {isLoading && <Loader/>}
        {participants ? (
            <ul>
                {participants.map((participant) => (
                <li key={participant._id}>
                    <ParticipantCard participant={participant} />
                </li>
                ))}
            </ul>
      ) : (
        <p>no one has signed up for the event yet</p>
      )}
    </div>
  )
}

