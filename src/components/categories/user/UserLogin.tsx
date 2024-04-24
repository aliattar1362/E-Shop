
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../../reduxToolkit/store";
import axios from "axios";
import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { saveUserData, saveTokens } from "../../../reduxToolkit/slices/userSlice";
import { useNavigate } from "react-router-dom";


export default function UserLogin() {
 

  const dispatch = useDispatch();
  const navigate = useNavigate();

 const existingUser = useSelector((state: AppState) => state.users.user)
 console.log("existingUser", existingUser)

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        loginData
      );

      const { access_token, refresh_token } = response.data;

      // Save user data and tokens to Redux store
      dispatch(saveTokens({ access_token, refresh_token }));

    try {
      // Get user data with the access token
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      // Update user data in Redux store
      dispatch(saveUserData(response.data));

    } catch (error) {
      console.error("Profile retrieval failed:", error);
      // Handle profile retrieval failure, show error message, etc.
    
  };

      // Navigate to profile page
      navigate("/products");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

 

  return (
    <div>
    
      <Box className="containerStyle">
        <form onSubmit={handleSubmit}>
          <p style={{fontSize: 20, }}>Login here</p>
          <div>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              sx={{ mb: 2 }}
            />
          </div>

          <div>
            <TextField
              type="password"
              id="password"
              label="Password"
              variant="outlined"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              sx={{ mb: 2 }}
            />
          </div>

          <div>
            <Button variant="contained" color="primary" type="submit">
              Log In
            </Button>
          </div>
        </form>
      </Box>
    </div>
  );
}
