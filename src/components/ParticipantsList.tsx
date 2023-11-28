import React from "react";
import { useNavigate } from "react-router-dom";

interface Participant {
  id: number;
  name: string;
  age: string;
  phoneNumber: string;
}

interface ParticipantsListProps {
  participants: Participant[];
  loggedIn: boolean;
  onLogout: () => void;
}

const ParticipantsList: React.FC<ParticipantsListProps> = ({
  participants,
  loggedIn,
  onLogout,
}) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Participants List</h2>
      <button
        type="button"
        onClick={loggedIn ? onLogout : () => navigate("/login")}
      >
        {loggedIn ? "Log out" : "Log in as admin"}
      </button>

      <br />
      <br />
      <button type="button" onClick={() => navigate("/registration")}>
        Register new participant
      </button>
      <ul>
        {participants.map((participant) => (
          <li key={participant.id}>
            {participant.name} - {participant.age} years old -{" "}
            {participant.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParticipantsList;
