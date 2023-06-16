import React from "react";
import logo from "./logo.svg";
import "./App.css";
import EnrollmentForm from "./components/enroll";
import Chatbot from "react-chatbot-kit";

function App() {
  return (
    <div className="App">
      <EnrollmentForm />
    </div>
  );
}

export default App;
