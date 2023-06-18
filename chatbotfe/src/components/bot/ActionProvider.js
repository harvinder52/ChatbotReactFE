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
  const handleAge = (age) => {
    const userMessage = createClientMessage(age);
    const botMessage = createChatBotMessage(
      "Thank you. In 5 seconds, bot will exit"
    );

    let counter = 5;
    const intervalId = setInterval(() => {
      console.log(botMessage);
      const botMessageCopy = createChatBotMessage(counter, {
        withAvatar: true,
      });
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessageCopy],
      }));
      counter--;
      if (counter === 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage, botMessage],
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
