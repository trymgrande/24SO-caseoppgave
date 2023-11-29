import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ParticipantsList from "./components/ParticipantsList";
import RegistrationPage from "./components/RegistrationPage";

interface Participant {
  id: number;
  name: string;
  age: string;
  phoneNumber: string;
}

const App: React.FC = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const [storedLoggedInChecked, setStoredLoggedInChecked] =
    useState<boolean>(false);
  const [storedParticipantsChecked, setStoredParticipantsChecked] =
    useState<boolean>(false);

  useEffect(() => {
    const storedLoggedIn = JSON.parse(
      window.localStorage.getItem("loggedIn") || "false"
    );
    setLoggedIn(storedLoggedIn);
    setStoredLoggedInChecked(true);
  }, []);

  useEffect(() => {
    if (storedLoggedInChecked) {
      window.localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
    }
  }, [loggedIn, storedLoggedInChecked]);

  useEffect(() => {
    const storedParticipants = JSON.parse(
      window.localStorage.getItem("participants") || "[]"
    );
    setParticipants(storedParticipants);
    setStoredParticipantsChecked(true);
  }, []);

  useEffect(() => {
    if (storedParticipantsChecked) {
      window.localStorage.setItem("participants", JSON.stringify(participants));
    }
  }, [participants, storedParticipantsChecked]);

  const handleRegister = (newParticipant: Participant) => {
    setParticipants((prevParticipants) => [
      ...prevParticipants,
      newParticipant,
    ]);
  };

  const handleLogin = () => {
    setLoggedIn(!loggedIn);
  };

  // render nothing until the stored values are retrieved
  if (!storedLoggedInChecked || !storedParticipantsChecked) {
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ParticipantsList
                participants={participants}
                loggedIn={loggedIn}
                onLogout={handleLogin}
              />
            }
          />
          <Route
            path="registration"
            element={
              <RegistrationPage
                onRegister={handleRegister}
                loggedIn={loggedIn}
              />
            }
          />
          <Route path="login" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
