import React from "react";

function LoginForm({ username, password, onLogin }) {
  return (
    <div style={{ padding: "20px", border: "1px solid black", width: "250px" }}>
      <h3>Static Login</h3>

      <p><strong>Username:</strong> {username}</p>
      <p><strong>Password:</strong> {password}</p>

      <button onClick={onLogin}>Login</button>
    </div>
  );
}

export default LoginForm;
