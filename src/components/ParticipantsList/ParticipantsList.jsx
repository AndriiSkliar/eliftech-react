import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
import { fetchEventRegistrations, fetchParticipants } from "../../../api";
import ParticipantCard from "../ParticipantCard/ParticipantCard";


export const ParticipantsList = ({id}) => {
  const [participants, setParticipants] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
    
  const fetchData = async () => {
    setIsLoading(true);

    if (id) {
      const data = await fetchEventRegistrations(id);
      // console.log('dataId: ', data);
      setParticipants(data);
    } else {
      const data = await fetchParticipants();
      // console.log('data: ', data);
      setParticipants(data);
     }
    // const data = _id ? await fetchEventRegistrations(_id) : await fetchParticipants();
    // setParticipants(data);
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

