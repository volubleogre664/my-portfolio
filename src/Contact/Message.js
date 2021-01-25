import React from "react";
import "./Message.css";

function Message({ state }) {
  return (
    <div className={`message ${state}`}>
      <p className="message__text">
        Send me a nice little message and I will get back to you. This app is a
        PWA and it offers push notifications on my side so i reply almost
        instantly.
      </p>
    </div>
  );
}

export default Message;
