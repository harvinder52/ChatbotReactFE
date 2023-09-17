import { createChatBotMessage, Chatbot } from "react-chatbot-kit";

import MessageParser from "./bot/MessageParser";
import ActionProvider from "./bot/ActionProvider";

import ButtonWidget from "./bot/widgets/ButtonWidget";
import NameInputWidget from "./bot/widgets/NameInputWidget";
import AgeDropdownWidget from "./bot/widgets/AgeDropDownWidget";

import "react-chatbot-kit/build/main.css";
import { SelectSlotWidget } from "./bot/widgets/SelectSlotWidget";

const ChatboxPage = () => {
  const ChatbotConfig = {
    initialMessages: [
      createChatBotMessage("Hello, Welcome to the Student Info System!", {
        widget: "buttonWidget",
      }),
    ],
    widgets: [
      {
        widgetName: "selectSlotWidget",
        widgetFunc: (props) => <SelectSlotWidget {...props} />,
      },
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
