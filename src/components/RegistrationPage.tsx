import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface RegistrationPageProps {
  onRegister: (participant: Participant) => void;
  loggedIn: boolean;
}

interface Participant {
  id: number;
  name: string;
  age: string;
  phoneNumber: string;
}

const RegistrationPage: React.FC<RegistrationPageProps> = ({
  onRegister,
  loggedIn,
}) => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const navigate = useNavigate();

  const handleRegister = () => {
    if (!loggedIn) {
      // implement SMS registration confirmation logic here
      alert("Confirm the registration via SMS");
      const confirmResult = true; // mocking user SMS confirmation

      if (!confirmResult) {
        return; // user did not confirm the registration
      }
    }

    const newParticipant: Participant = {
      id: Math.floor(Math.random() * 10000000) + 1, // ID generation should be reconsidered
      name,
      age,
      phoneNumber,
    };

    onRegister(newParticipant);

    // reset form fields
    setName("");
    setAge("");
    setPhoneNumber("");

    navigate("/");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Registration Page</h2>
      <form>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
              marginBottom: "10px",
            }}
          />
        </label>
        <br />
        <label style={{ display: "block", marginBottom: "10px" }}>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
              marginBottom: "10px",
            }}
          />
        </label>
        <br />
        <label style={{ display: "block", marginBottom: "10px" }}>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
              marginBottom: "10px",
            }}
          />
        </label>
        <br />

        <button
          type="button"
          onClick={() => navigate("/")}
          style={{
            background: "#fff",
            color: "#333",
            padding: "10px",
            borderRadius: "5px",
            marginRight: "10px",
            cursor: "pointer",
          }}
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={handleRegister}
          style={{
            background: "#4caf50",
            color: "#fff",
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
