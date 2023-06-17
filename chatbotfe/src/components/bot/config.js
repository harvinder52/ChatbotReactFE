import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [
    createChatBotMessage("Hello, Welcome to the Student Info System!"),
  ],
  widgets: [
    {
      widgetName: "buttonWidget",
      widgetFunc: (props) => <ButtonWidget {...props} />,
    },
  ],
};

const ButtonWidget = ({ setState, sendMessage }) => {
  const handleButtonClick = () => {
    const message = createChatBotMessage("Got it!", { role: "user" });

    sendMessage(message);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Got it!</button>
    </div>
  );
};

export default config;
