import Button from "@mui/material/Button";
import React, { useState, useEffect } from "react";

const ButtonWidget = ({ setState, sendMessage, actions }) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const handleButtonClick = () => {
    //const message = createClientMessage("hello", { role: "user" });
    actions.handleGotIt();
    //actions.handleHello();
    setButtonClicked(true);
  };

  return (
    <div>
      {!buttonClicked && (
        <Button variant="contained" onClick={handleButtonClick}>
          Got it!
        </Button>
      )}
    </div>
  );
};

export default ButtonWidget;
