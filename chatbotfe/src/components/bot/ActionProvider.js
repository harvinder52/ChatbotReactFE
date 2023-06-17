import React from "react";
import {
  createChatBotMessage,
  createClientMessage,
  Chatbot,
} from "react-chatbot-kit";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const userMessage = createClientMessage("Got it!");
    const botMessage = createChatBotMessage("Enter your Name");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage, botMessage],
      step: "name",
    }));
  };

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
          },
        });
      })}
    </div>
  );
};
export default ActionProvider;
