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
    const [name, setName] = useState("");
    const [submitButtonClicked, setSubmitButtonClicked] = useState(false);

    const handleNameChange = (event) => {
      setName(event.target.value);
    };

    const handleNameSubmit = () => {
      const message = createChatBotMessage(name);
      actions.handleName(message.message);
      setSubmitButtonClicked(true);
      dispatch(setName(message.message));
    };

    return (
      <div>
        {!submitButtonClicked && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <TextField
              type="text"
              value={name}
              onChange={handleNameChange}
              variant="outlined"
              label="Name"
              size="small"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleNameSubmit}
              size="small"
            >
              Submit
            </Button>
          </div>
        )}
      </div>
    );
  };

  const AgeDropdownWidget = ({ setState, sendMessage, actions }) => {
    const [age, setAge] = useState("");
    const [submitButtonClicked, setSubmitButtonClicked] = useState(false);

    const handleAgeChange = (event) => {
      setAge(event.target.value);
    };

    const handleAgeSubmit = () => {
      const message = createChatBotMessage(age);
      actions.handleAge(message.message);
      setSubmitButtonClicked(true);
      console.log(age);
      dispatch(setAge({ age: age }));
    };

    return (
      <div>
        {!submitButtonClicked && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <FormControl variant="outlined">
              <Select value={age} onChange={handleAgeChange} native>
                {Array.from({ length: 40 - 18 + 1 }, (_, index) => (
                  <option key={index + 18} value={index + 18}>
                    {index + 18}
                  </option>
                ))}
              </Select>
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={handleAgeSubmit}
            >
              Submit
            </Button>
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
