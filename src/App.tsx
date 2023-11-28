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

  const [localStorageChecked, setLocalStorageChecked] =
    useState<boolean>(false);
  const [participantsDataLoaded, setParticipantsDataLoaded] =
    useState<boolean>(false);

  useEffect(() => {
    const storedLoggedIn = JSON.parse(
      window.localStorage.getItem("loggedIn") || "false"
    );
    setLoggedIn(storedLoggedIn);
    setLocalStorageChecked(true);
  }, []);

  useEffect(() => {
    if (localStorageChecked) {
      window.localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
    }
  }, [loggedIn, localStorageChecked]);

  useEffect(() => {
    const storedParticipants = JSON.parse(
      window.localStorage.getItem("participants") || "[]"
    );
    setParticipants(storedParticipants);
    setParticipantsDataLoaded(true);
  }, []);

  useEffect(() => {
    if (participantsDataLoaded) {
      window.localStorage.setItem("participants", JSON.stringify(participants));
    }
  }, [participants, participantsDataLoaded]);

  const handleRegister = (newParticipant: Participant) => {
    setParticipants((prevParticipants) => [
      ...prevParticipants,
      newParticipant,
    ]);
  };

  const handleLogin = () => {
    setLoggedIn(!loggedIn);
  };

  // Render nothing until the loggedIn state has been set
  if (!localStorageChecked) {
    return null; // or a loading indicator, etc.
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" render={() => <Redirect to="/participants" />} /> */}
        <Route
          index
          element={
            <ParticipantsList
              participants={participants}
              loggedIn={loggedIn}
              onLogout={handleLogin}
            />
          }
        />
        <Route
          path="participants"
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
            <RegistrationPage onRegister={handleRegister} loggedIn={loggedIn} />
          }
        />
        <Route path="login" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
