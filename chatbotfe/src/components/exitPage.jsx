import React from "react";

const ConfirmationPage = ({ name, age }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <h1>
          Your name {name} aged {age} has been added to the student system.
        </h1>
        <p>You may now exit.</p>
      </div>
    </div>
  );
};

export default ConfirmationPage;
