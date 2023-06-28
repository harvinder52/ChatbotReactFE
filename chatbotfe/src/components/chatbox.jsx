import React, { useState, useEffect } from "react";
import {
  createChatBotMessage,
  createClientMessage,
  Chatbot,
} from "react-chatbot-kit";
import { useDispatch } from "react-redux";
import MessageParser from "./bot/MessageParser";
import ActionProvider from "./bot/ActionProvider";
import Button from "@mui/material/Button";
import { FormControl, Select, TextField } from "@material-ui/core";
import { setName, setAge } from "../reducers/studentSlice";
import "react-chatbot-kit/build/main.css";

const ChatboxPage = () => {
  const dispatch = useDispatch();
  const ChatbotConfig = {
    initialMessages: [
      createChatBotMessage("Hello, Welcome to the Student Info System!", {
        widget: "buttonWidget",
      }),
    ],
    widgets: [
      {
        widgetName: "buttonWidget",
        widgetFunc: (props) => <ButtonWidget {...props} />,
      },
      {
        widgetName: "nameInputWidget",
        widgetFunc: (props) => <NameInputWidget {...props} />,
      },
      {
        widgetName: "ageDropdownWidget",
        widgetFunc: (props) => <AgeDropdownWidget {...props} />,
      },
    ],
  };

  const ButtonWidget = ({ setState, sendMessage, actions }) => {
    const [buttonClicked, setButtonClicked] = useState(false);
    const handleButtonClick = () => {
      //const message = createClientMessage("hello", { role: "user" });
      actions.handleHello();
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

  const NameInputWidget = ({ setState, sendMessage, actions }) => {
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

  const AgeDropdownWidget = ({ setState, sendMessage, actions }) => {
    const [submitButtonClicked, setSubmitButtonClicked] = useState(false);

    const handleAgeChange = (event) => {
      const message = createChatBotMessage(event.target.value);
      actions.handleAge(message.message);
      setSubmitButtonClicked(true);
      console.log(event.target.value);
      dispatch(setAge({ age: message.message }));
    };

    const handleAgeSubmit = () => {};

    return (
      <div>
        {!submitButtonClicked && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <FormControl variant="outlined">
              <Select onChange={handleAgeChange} native>
                {Array.from({ length: 40 - 18 + 1 }, (_, index) => (
                  <option key={index + 18} value={index + 18}>
                    {index + 18}
                  </option>
                ))}
              </Select>
            </FormControl>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="chatbox-page">
      <div className="chatbot-container">
        <Chatbot
          config={ChatbotConfig}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          // state={state}
          // setState={setState}
          // sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default ChatboxPage;
