import React from "react";
import {
  createChatBotMessage,
  createClientMessage,
  Chatbot,
} from "react-chatbot-kit";
import { useNavigate } from "react-router-dom";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const navigate = useNavigate();
  const handleGotIt = () => {
    const botMessage = createChatBotMessage("Pick a Slot!", {
      widget: "selectSlotWidget",
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      step: "name",
    }));
  };
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
      if (counter === -1) {
        navigate("/exit");
        clearInterval(intervalId);
      }
    }, 1000);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage, botMessage],
      step: "age",
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleGotIt,
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
