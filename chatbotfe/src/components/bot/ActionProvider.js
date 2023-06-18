import React from "react";
import {
  createChatBotMessage,
  createClientMessage,
  Chatbot,
} from "react-chatbot-kit";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const userMessage = createClientMessage("Got it!");
    const botMessage = createChatBotMessage("Enter your Name", {
      widget: "nameInputWidget",
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage, botMessage],
      step: "name",
    }));
  };
  const handleName = (name) => {
    const userMessage = createClientMessage(name);
    const botMessage = createChatBotMessage("Enter your Age", {
      widget: "ageDropdownWidget",
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage, botMessage],
      step: "name",
    }));
  };
  const handleAge = () => {
    const botMessage = createChatBotMessage(
      "Thank you. In 5 seconds, bot will exit"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      step: "age",
    }));
  };

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleName,
            handleAge,
          },
        });
      })}
    </div>
  );
};
export default ActionProvider;
