import { createChatBotMessage } from "react-chatbot-kit";
import { setName } from "../../../reducers/studentSlice";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField } from "@material-ui/core";

const NameInputWidget = ({ setState, sendMessage, actions }) => {
  const dispatch = useDispatch();
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const message = createChatBotMessage(event.target.value);
      actions.handleName(message.message);
      setSubmitButtonClicked(true);
      dispatch(setName(message.message));
    }
  };

  return (
    <div>
      {!submitButtonClicked && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TextField
            type="text"
            variant="outlined"
            label="Name"
            onKeyDown={handleKeyDown}
            size="small"
          />
        </div>
      )}
    </div>
  );
};

export default NameInputWidget;
