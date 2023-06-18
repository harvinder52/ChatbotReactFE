import React, { useState, useEffect } from "react";
import {
  createChatBotMessage,
  createClientMessage,
  Chatbot,
} from "react-chatbot-kit";
import MessageParser from "./bot/MessageParser";
import ActionProvider from "./bot/ActionProvider";
import "react-chatbot-kit/build/main.css";

const ChatboxPage = () => {
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
        {!buttonClicked && <button onClick={handleButtonClick}>Got it!</button>}
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
    };

    return (
      <div>
        {!submitButtonClicked && (
          <div>
            <input type="text" value={name} onChange={handleNameChange} />
            <button onClick={handleNameSubmit}>Submit</button>
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
    };

    return (
      <div>
        {!submitButtonClicked && (
          <div>
            <select value={age} onChange={handleAgeChange}>
              {Array.from({ length: 40 - 18 + 1 }, (_, index) => (
                <option key={index + 18} value={index + 18}>
                  {index + 18}
                </option>
              ))}
            </select>
            <button onClick={handleAgeSubmit}>Submit</button>
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