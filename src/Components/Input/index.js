import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import DayDD from "../DayDD";
import ScoreDD from "../ScoreDD";
import WeekDD from "../WeekDD";
import "./Input.css";
const url = process.env.REACT_APP_API_URL || "http://localhost:3005";

function Input({ userTable }) {
  //! make the fields required
  const [week, setWeek] = useState();
  const [day, setDay] = useState();
  const [score, setScore] = useState();

  //! Function that sends the object to server
  async function onClick(event) {
    event.preventDefault();
    try {
      const response = await fetch(`${url}/progress`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          week: week,
          day: day,
          score: score,
          //when new user is registered, add link_id:userTable.payload[payload.length-1].uid
          link_id: userTable.payload[0].uid,
        }),
      });
      const data = await response.json();
      console.log("progress data: ", data);
      console.log("progress week: ", week);
      console.log("progress day: ", day);
      console.log("progress score: ", score);

      // function that waits a second and then sends a fetch
    } catch (error) {
      console.log(error.message);
    }
  }
  const nameVar = userTable.payload.length.name;
  console.log("This is the user table[0].uid:", userTable.payload[0].uid);

  return (
    <div>
      <Box className="input-main-div">
        <div className="welcome-text">
          <h1>Welcome, {nameVar}</h1>
          <div className="underline"></div>
        </div>
        <WeekDD setWeek={setWeek} />
        <DayDD setDay={setDay} />
        <ScoreDD setScore={setScore} />
        <div id="sign-line" className="underline"></div>
        <Button onClick={onClick} variant="outlined">
          Submit
        </Button>
      </Box>
    </div>
  );
}

export default Input;
