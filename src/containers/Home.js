import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AllBooks from "./AllBooks";

const Home = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  console.log(search);
  return (
    <div>
      <img
        style={{ maxWidth: "80%", height: "auto" }}
        src="assets/goodreads.webp"
        alt="good reads"
      />

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "80%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Good Read Search"
          variant="standard"
          onChange={handleChange}
          value={search}
        />
      </Box>
      <AllBooks search={search} />
    </div>
  );
};

export default Home;
