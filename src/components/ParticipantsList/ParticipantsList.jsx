import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
import { fetchEventRegistrations, fetchParticipants } from "../../../api";
import ParticipantCard from "../ParticipantCard/ParticipantCard";
import css from './ParticipantsList.module.css';

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
        {!isLoading && participants ? (
            <ul className={css.participantsList}>
                {participants.map((participant) => (
                <li className={css.participantsItem} key={participant._id}>
                    <ParticipantCard participant={participant} />
                </li>
                ))}
            </ul>
      ) : (
        <p className={css.participantsText}>no one has signed up for the event yet</p>
      )}
    </div>
  )
}

