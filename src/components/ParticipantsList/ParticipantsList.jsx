import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
import { fetchEventRegistrations, fetchParticipants } from "../../../api";
import ParticipantCard from "../ParticipantCard/ParticipantCard";


export const ParticipantsList = ({_id}) => {
  const [participants, setParticipants] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
    
  const fetchData = async () => {
    setIsLoading(true);
    const data = _id ? await fetchEventRegistrations(_id) : await fetchParticipants();
    console.log(data);
    setParticipants(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(); 
  }, []);
    
  return (
    <div>
        {isLoading && <Loader/>}
        {participants && (
            <ul>
                {participants.map((participant) => (
                <li key={participant._id}>
                    <ParticipantCard participant={participant} />
                </li>
                ))}
            </ul>
        )}
    </div>
  )
}

