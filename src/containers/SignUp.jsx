import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { actionTypes } from "../redux/constants/action-types";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const register = () => {
    console.log("fgdf", input);

    dispatch({
      type: actionTypes.SIGN_UP,
      payload: input,
    });
    console.log("input:", input);
  };
  const inputHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input.email)) {
      alert("Email is invalid");
    } else {
      e.preventDefault();
      setInput({ email: "", password: "" });
      register();
      navigate("/Login");
    }
  };
  // function isValidEmail(email) {
  //   return /\S+@\S+\.\S+/.test(email);
  // }

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
        <form
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

          <Button onClick={submitHandler} variant="contained">
            SignUp
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default SignUp;
