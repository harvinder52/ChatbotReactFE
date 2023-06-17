import React, { useState, useEffect } from "react";
import {
  createChatBotMessage,
  createClientMessage,
  Chatbot,
} from "react-chatbot-kit";
import MessageParser from "./bot/MessageParser";
import ActionProvider from "./bot/ActionProvider";
import "react-chatbot-kit/build/main.css";

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

const AgeDropdownWidget = ({ setState, sendMessage }) => {
  const [age, setAge] = useState("");

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleAgeSubmit = () => {
    const message = createChatBotMessage(`Age: ${age}`);
    setState((prevState) => ({
      ...prevState,
      step: "thankyou",
      age: age,
    }));
    sendMessage(message);
  };

  return (
    <div>
      <select value={age} onChange={handleAgeChange}>
        <option value="">Select Age</option>
        <option value="18-25">18-25</option>
        <option value="26-30">26-30</option>
        <option value="31-40">31-40</option>
      </select>
      <button onClick={handleAgeSubmit}>Submit</button>
    </div>
  );
};

const EnrollmentForm = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [state, setState] = useState({
    step: 0,
    name: "",
    age: "",
  });

  useEffect(() => {
    if (state.step === "name") {
      const countdown = setInterval(() => {
        setState((prevState) => ({
          ...prevState,
          step: prevState.step - 1,
        }));
      }, 1000);

      setTimeout(() => {
        clearInterval(countdown);
        // Redirect to page 3
        // Add your logic to navigate to page 3 here
      }, 5000);
    }
  }, [state.step]);

  const handleEnrollClick = () => {
    setShowChatbot(true);
  };

  const sendMessage = (message) => {
    // Custom logic to handle sending messages to the chatbot
    console.log("Sending message:", message);
  };

  return (
    <div className="enrollment-form">
      <h1>Enter into Student Info System</h1>
      <button className="enroll-button" onClick={handleEnrollClick}>
        Enroll Now
      </button>
      {showChatbot && (
        <div className="chatbot-container">
          <Chatbot
            config={ChatbotConfig}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            state={state}
            setState={setState}
            sendMessage={sendMessage}
          />
        </div>
      )}
    </div>
  );
};

export default EnrollmentForm;
