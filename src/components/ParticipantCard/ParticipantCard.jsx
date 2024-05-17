

const ParticipantCard = ({participant}) => {
  const { name, email, event } = participant;
  
  return (
    <>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{event}</p>
    </>
  )
}

export default ParticipantCard
