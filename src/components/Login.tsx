import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLoginAttempt = () => {
    // Check if username and password are not empty
    if (username.trim() !== "" && password.trim() !== "") {
      // Perform authentication logic here
      console.log("Logging in with:", username, password);

      // Reset form fields
      setUsername("");
      setPassword("");

      onLogin();
      alert("Login successful");

      navigate("/participants");
    } else {
      // Handle invalid login attempt
      alert("Please enter valid username and password.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={() => navigate("/participants")}>
          Cancel
        </button>
        <button type="button" onClick={handleLoginAttempt}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
