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
    // authenticates user if username and password is not empty (should be improved)
    if (username.trim() !== "" && password.trim() !== "") {
      console.log("Logging in with:", username, password);

      // reset form fields
      setUsername("");
      setPassword("");

      onLogin();
      alert("Login successful");

      navigate("/");
    } else {
      // handle invalid login attempt
      alert("Please enter valid username and password.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Login</h2>
      <form>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          onClick={handleLoginAttempt}
          style={{
            background: "#2196F3",
            color: "#fff",
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
