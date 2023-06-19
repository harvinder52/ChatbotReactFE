import React, { useState, useEffect } from "react";
import {
  createChatBotMessage,
  createClientMessage,
  Chatbot,
} from "react-chatbot-kit";
import { useDispatch } from "react-redux";
import MessageParser from "./bot/MessageParser";
import ActionProvider from "./bot/ActionProvider";
import "react-chatbot-kit/build/main.css";

import { useNavigate } from "react-router-dom";

const EnrollmentForm = () => {
  const navigate = useNavigate();

  const [showChatbot, setShowChatbot] = useState(false);

  const handleEnrollClick = () => {
    setShowChatbot(true);
    navigate("/chatbox");
  };

  return (
    <div className="enrollment-form">
      <h1>Enter into Student Info System</h1>
      <button className="enroll-button" onClick={handleEnrollClick}>
        Enroll Now
      </button>
    </div>
  );
};

export default EnrollmentForm;
