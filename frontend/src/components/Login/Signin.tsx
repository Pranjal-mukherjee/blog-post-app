import { Box, Button, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { BASEURL, emailREgex, passwordRegex } from "../../utils/constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setEmailError(!emailREgex.test(email));
    setPasswordError(!passwordRegex.test(password));
  }, [email, password]);
  const handleButtonCLick = async()=>{
try {
   const data = {email: email , password: password, name: "Pranjal"} ;
   const res = await api.post(`/user/register`,data);
   navigate("/blogls")

} catch (error) {
    console.log("error occured")
}
  }
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignContent={"space-between"}
    >
      <Box>
        <Typography variant="h2">Sign in</Typography>
      </Box>
      <Box display={"flex"} flexDirection={"column"}>
        <Box>
          <TextField
            label="Email"
            type={"email"}
            value={email}
            color={"primary"}
            onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
              const val = e.target.value;
              setEmail(val);
            }}
          ></TextField>
          {emailError && (
            <Typography variant="body1" color="red">
              Email is not in corrrect format
            </Typography>
          )}
        </Box>
        <Box>
          <TextField
            label="Password"
            value={password}
            color={"primary"}
            onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
              const val = e.target.value;
              setPassword(val);
            }}
            type="password"
          ></TextField>
          {passwordError && (
            <Typography variant="body1" color="red">
              Password is not in corrrect format
            </Typography>
          )}
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={"column"}>
        <Button
          variant="contained"
          color="primary"
          disabled={emailError || passwordError}
          onClick={handleButtonCLick}
        >
          Sign in
        </Button>
      </Box>
    </Box>
  );
};

export default Signin;
