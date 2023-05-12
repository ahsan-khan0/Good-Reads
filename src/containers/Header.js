import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { actionTypes } from "../redux/constants/action-types";

import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.allUsers);
  console.log("SDFASFA", state);
  const handleClickLogout = () => {
    return dispatch({
      type: actionTypes.LOG_OUT,
    });
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
          variant="dense"
        >
          <Typography variant="h6" color="inherit" component="div">
            GOOD READS
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              gap: "20px",
            }}
          >
            <Link to={"/"}>
              <Button variant="contained">Home</Button>
            </Link>
            {!state.isLogIn && (
              <Link to={"/Login"}>
                <Button variant="contained">Login</Button>
              </Link>
            )}
            {state.isLogIn && (
              <Button variant="contained" onClick={handleClickLogout}>
                Log out
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
