import React from "react";
import { BrowserRouter, Router, Routes, Route, Switch } from "react-router-dom";
import EnrollmentForm from "./components/enroll";
import ChatboxPage from "./components/chatbox";
import { ExitStatus } from "typescript";
import ConfirmationPage from "./components/exitPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<EnrollmentForm />} />
        <Route path="/chatbox" element={<ChatboxPage />} />
        <Route path="/exit" element={<ConfirmationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
