import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const state = useSelector((state) => state.allUsers);
  console.log(state.isLogIn);
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    if (!state.isLogIn) {
      navigate("/Login");
    }
  });

  return (
    <div>
      <Component />
    </div>
  );
};

export default Protected;
