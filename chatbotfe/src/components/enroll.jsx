import React, { useState } from "react";

import { Chatbot } from "react-chatbot-kit";
import config from "./bot/config.js";
import MessageParser from "./bot/MessageParser.js";
import ActionProvider from "./bot/ActionProvider.js";

const EnrollmentForm = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const handleEnrollClick = () => {
    setShowChatbot(true);
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
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </div>
  );
};

export default EnrollmentForm;
