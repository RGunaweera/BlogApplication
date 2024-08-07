import { TextField } from "@mui/material";
import * as React from "react";
import { useState } from "react";

export default function User() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeFN = (event) => {
    setFirstName(event.target.value);
  };
  const handleChangeLN = (event) => {
    setLastName(event.target.value);
  };
  const handleChangeEM = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePWD = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      password,
    };
    console.log(JSON.stringify(formData, null, 2)); // Log the input value on submit
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="First Name"
        variant="outlined"
        value={firstName}
        onChange={handleChangeFN}
      />

      <TextField
        id="outlined-basic"
        label="Last Name"
        variant="outlined"
        value={lastName}
        onChange={handleChangeLN}
      />

      <TextField
        id="outlined-basic"
        type="email"
        label="Email"
        variant="outlined"
        value={email}
        onChange={handleChangeEM}
      />

      <TextField
        id="outlined-password-input"
        type="password"
        label="Password"
        variant="outlined"
        value={password}
        onChange={handleChangePWD}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
