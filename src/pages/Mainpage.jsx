// import React, {useState} from "react";
import Meals from "../components/Meals.jsx";
import ScarcitySidebar from "../components/ScarcitySidebar.jsx";
import ChatbotGreeting from "../components/ChatbotGreeting.jsx";
// import Header from "../components/Header.jsx";

function Mainpage() {

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 1, borderRight: "1px solid #ccc", backgroundColor: "#f9f9f9" }}>
        <ScarcitySidebar />
      </div>
      <div style={{ flex: 4, overflowY: "auto" }}>
          <Meals />
      </div>
      <ChatbotGreeting />
    </div>
  );
}

export default Mainpage;
