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
      // Show a dialog box indicating the user is not logged in
      alert("Confirm the registration via SMS");

      // implement SMS confirmation logic here
      const confirmResult = true; // mocking user SMS confirmation

      if (!confirmResult) {
        return; // User did not confirm the registration
      }
    }

    // Perform validation here if needed
    const newParticipant: Participant = {
      id: Math.random(), // You should use a better ID generation method in a real app
      name,
      age,
      phoneNumber,
    };

    onRegister(newParticipant);

    // Reset form fields
    setName("");
    setAge("");
    setPhoneNumber("");

    navigate("/participants");
  };

  return (
    <div>
      <h2>Registration Page</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <br />

        <button type="button" onClick={() => navigate("/participants")}>
          Cancel
        </button>

        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
