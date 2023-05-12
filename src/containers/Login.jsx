import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { actionTypes } from "../redux/constants/action-types";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state = useSelector((state) => state.allUsers.users);
  console.log(state);

  // const users = JSON.parse(localStorage.getItem("allUsers"));

  const inputHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // e.preventDefault();

    // console.log("asdfasdf", input.email, input.password);
    // console.log("State email", state.email, "state password", state.password);

    if (input.email && input.password) {
      let userFound = false;
      state.forEach((user) => {
        if (user.email === input.email && user.password === input.password) {
          dispatch({
            type: actionTypes.SIGN_IN,
          });
          navigate("/");
          userFound = true;
        }
      });
      if (!userFound) {
        alert("Credentials did not match");
      }
    } else {
      alert("Please enter your email and password");
    }
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "400px",
          }}
        >
          <TextField
            required
            id="outlined-required"
            label="Email"
            value={input.email}
            onChange={inputHandler}
            type="email"
            name="email"
          />
          <TextField
            required
            id="outlined-required"
            label="password"
            value={input.password}
            onChange={inputHandler}
            name="password"
          />
          <p>
            <a href="login">
              Don't have an account?<Link to={"/SignUp"}> Sign Up</Link>
            </a>
          </p>
          <Button variant="contained" onClick={handleSubmit}>
            Login
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Login;
