import Button from "@mui/material/Button";
import { createChatBotMessage } from "react-chatbot-kit";
import React, { useState } from "react";

export const SelectSlotWidget = ({ setState, actions, sendMessage }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeOfDay, setSelectedTimeOfDay] = useState(null);
  const [booleanState, setBooleanState] = useState(false);

  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

  const handleSlotSelection = (slot) => {
    if (selectedDate) {
      const slotMessage = createChatBotMessage(`${selectedDate} - ${slot}`);
      console.log(slotMessage.message);
      setSelectedTimeOfDay(slot);
      actions.handlePickedSlot(slotMessage.message);
      setBooleanState(true);
    } else {
      console.log("Please select a date first.");
    }
  };

  return (
    <div>
      {!booleanState && (
        <div style={{ border: "1px solid gray", padding: "10px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Button
              variant={selectedDate === "10 May" ? "contained" : "outlined"}
              onClick={() => handleDateSelection("10 May")}
            >
              10 May
            </Button>
            <Button
              variant={selectedDate === "11 May" ? "contained" : "outlined"}
              onClick={() => handleDateSelection("11 May")}
            >
              11 May
            </Button>
            <Button
              variant={selectedDate === "12 May" ? "contained" : "outlined"}
              onClick={() => handleDateSelection("12 May")}
            >
              12 May
            </Button>
          </div>
          {selectedDate && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "16px",
              }}
            >
              <Button
                variant={
                  selectedTimeOfDay === "Morning" ? "contained" : "outlined"
                }
                size="small"
                onClick={() => handleSlotSelection("Morning")}
              >
                Morning
              </Button>
              <Button
                variant={
                  selectedTimeOfDay === "Afternoon" ? "contained" : "outlined"
                }
                size="small"
                onClick={() => handleSlotSelection("Afternoon")}
              >
                Afternoon
              </Button>
              <Button
                variant={
                  selectedTimeOfDay === "Evening" ? "contained" : "outlined"
                }
                size="small"
                onClick={() => handleSlotSelection("Evening")}
              >
                Evening
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
