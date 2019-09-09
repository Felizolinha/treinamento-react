import React, { useState } from "react";
import "./Login.css";

import api from "../services/api";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post("/login", { username, password });
    console.log(response);
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
