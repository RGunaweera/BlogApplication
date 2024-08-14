import { Container, TextField, Button } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";  


const theme = createTheme({
  palette: {
    primary: {
      main: "#051560",
      dark: "#111f56",
      light: "#959cc9",
    },
  },
});

export default function User() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate(); 

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
  const handleChangeCPWD = (event) => {
    setConfirmPassword(event.target.value);
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();

    if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "") {
      alert("Please fill in all fields!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    navigate('/');  

    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    console.log(user); // Log the input value on submit

    

    fetch("http://localhost:8080/api/user/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        marginTop: "80px",
      }}
    >
      <Box
        sx={{
          // backgroundColor: '#e7f5e9',
          maxWidth: "1000px", // Set a maximum width for the container
          width: "100%",
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6} md={4}>
            <Box sx={{ position: "relative", width: "100%" }}>
              <img
                src="https://images.unsplash.com/photo-1539813171823-22916c9fa1d9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Overlay"
                style={{ width: "100%", height: "auto", display: "block" }} // Make image responsive
              />
              
            </Box>
          </Grid>
          <Grid item xs={6} md={8}>
            <Box sx={{ padding: "80px" }}>
              <form onSubmit={handleSubmit}>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontFamily: "Caveat, cursive",
                    fontSize: "30px",
                  }}
                >
                  Register
                </Typography>
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  value={firstName}
                  onChange={handleChangeFN}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  value={lastName}
                  onChange={handleChangeLN}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  size="small"
                  id="outlined-basic"
                  type="email"
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={handleChangeEM}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  size="small"
                  id="outlined-password-input"
                  type="password"
                  label="Password"
                  variant="outlined"
                  value={password}
                  onChange={handleChangePWD}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  size="small"
                  id="outlined-password-input"
                  type="password"
                  label="Confirm Password"
                  variant="outlined"
                  value={confirmPassword}
                  onChange={handleChangeCPWD}
                  fullWidth
                  margin="normal"
                />
                <ThemeProvider theme={theme}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ marginTop: 2, padding: "10px" }}
                    type="submit"
                  >
                    Submit
                  </Button>
                </ThemeProvider>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
