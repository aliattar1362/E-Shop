// Internal Features
import React, { useState } from "react";
import { UserRegisterType } from "../../../misc/type";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveUserData } from "../../../reduxToolkit/slices/userSlice";
// Styles
import { Box, Button, TextField, Typography } from "@mui/material";

export default function UserRegister() {

    const navigate= useNavigate();
    const dispatch = useDispatch();

  const [userData, setUserData] = useState<UserRegisterType>({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  }

  function onClickHandler() {

      // Basic validation
  if (!userData.name || !userData.email || !userData.password) {
    alert("Please fill in all required fields.");
    return;
  }

  // Checking the email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(userData.email)) {
    alert("Please enter a valid email address.");
    return;
  }

    // Check if the password meets the minimum length requirement
  if (userData.password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }
    // Check if the password contains at least one uppercase letter
  if (!/[A-Z]/.test(userData.password)) {
    alert("Password must contain at least one uppercase letter.");
    return;
  }
    // send userData to backend
    axios
      .post("https://api.escuelajs.co/api/v1/users/", userData)
      .then((response) => {
        console.log("response", response);
        if (response.status === 201) {
        window.alert("Succsessful registration!")
        // navigate user to login in page
        navigate("/login")
        }
      })
      .catch((error) => console.log(error));
  }
  
  return (
    <>
        <Box className="containerStyle">
          <form>
            <Typography variant="h5" sx={{marginBottom: "20px"}}>
              Create Your E-Commerce Account
            </Typography>
            <div>
              <TextField
                id="given-name"
                label="Name"
                variant="outlined"
                value={userData.name}
                name="name"
                onChange={onChangeHandler}
                sx={{ mb: 2 }}
              />
            </div>

            <div>
              <TextField
                id="username"
                label="Email"
                variant="outlined"
                value={userData.email}
                name="email"
                onChange={onChangeHandler}
                sx={{ mb: 2 }}
              />
            </div>

            <div>
              <TextField
                id="new-password"
                label="Password"
                type="password"
                variant="outlined"
                value={userData.password}
                name="password"
                onChange={onChangeHandler}
                sx={{ mb: 2 }}
              />
            </div>

            <div>
              <TextField
                id="avatar"
                label="Avatar URL"
                variant="outlined"
                value={userData.avatar}
                name="avatar"
                onChange={onChangeHandler}
                sx={{ mb: 2 }}
              />
            </div>

            <div>
              <Button variant="contained" color="primary" onClick={onClickHandler}>
                Register
              </Button>
            </div>
          </form>
    </Box>
    </>
  );
}
