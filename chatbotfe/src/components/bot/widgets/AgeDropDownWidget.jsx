import { FormControl, Select } from "@material-ui/core";
import { setAge } from "../../../reducers/studentSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createChatBotMessage } from "react-chatbot-kit";

const AgeDropdownWidget = ({ setState, sendMessage, actions }) => {
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
  const dispatch = useDispatch();
  const handleAgeChange = (event) => {
    const message = createChatBotMessage(event.target.value);
    actions.handleAge(message.message);
    setSubmitButtonClicked(true);
    console.log(event.target.value);
    dispatch(setAge({ age: message.message }));
  };

  return (
    <div>
      {!submitButtonClicked && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <FormControl variant="outlined">
            <Select onChange={handleAgeChange} native>
              {Array.from({ length: 40 - 18 + 1 }, (_, index) => (
                <option key={index + 18} value={index + 18}>
                  {index + 18}
                </option>
              ))}
            </Select>
          </FormControl>
        </div>
      )}
    </div>
  );
};

export default AgeDropdownWidget;
