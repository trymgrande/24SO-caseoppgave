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
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Participants List</h2>
      <button
        type="button"
        onClick={loggedIn ? onLogout : () => navigate("/login")}
        style={{
          background: loggedIn ? "#E57373" : "#555555",
          color: "#fff",
          padding: "10px",
          borderRadius: "5px",
          marginBottom: "20px",
          cursor: "pointer",
        }}
      >
        {loggedIn ? "Log out" : "Log in as administrator"}
      </button>
      <br />
      <br />
      <button
        type="button"
        onClick={() => navigate("/registration")}
        style={{
          background: "#2196F3",
          color: "#fff",
          padding: "10px",
          borderRadius: "5px",
          marginBottom: "20px",
          cursor: "pointer",
        }}
      >
        Register new participant
      </button>
      <table style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((participant) => (
            <tr
              key={participant.id}
              style={{
                marginBottom: "10px",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <td>{participant.name}</td>
              <td>{participant.age}</td>
              <td>{participant.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParticipantsList;
