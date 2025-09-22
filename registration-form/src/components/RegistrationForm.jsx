import "tailwindcss";
import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [registeredUser, setRegisteredUser] = useState(null);

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleRegister = (e) => {
    e.preventDefault();

    const { username, email, password, repeatPassword } = formData;

    if (!username || !email || !password || !repeatPassword) {
      alert("Fill in all fields");
      return;
    }

    if (password !== repeatPassword) {
      alert("Passwords do not match");
      return;
    }

    const userData = { username, email, password };

    setRegisteredUser(userData);

    localStorage.setItem("registeredUser", JSON.stringify(userData));

    alert(`Registration successful dear ${username}`);
  };

  return (
    <>
      <div className="bigDiv">
        <h2>Registration Form</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <br />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />

          <input
            type="password"
            name="repeatPassword"
            placeholder="Repeat Password"
            value={formData.repeatPassword}
            onChange={handleChange}
          />
          <br />

          <button type="submit">Register</button>
        </form>
      </div>
      <div>
        {registeredUser && (
          <div className="registeredDiv">
            <h3>Recently registered user: {registeredUser.username} </h3>
            <p>Email: {registeredUser.email}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default RegistrationForm;
