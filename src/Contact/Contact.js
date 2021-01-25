import React from "react";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
import Message from "./Message.js";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <header className="contact__header">
        <span className="left" />
        <span className="middle"> Message </span>
        <span className="right" />
      </header>

      <section className="contact__body">
        <Message state="sent" />
        <Message state="recieved" />
      </section>

      <footer className="contact__footer">
        <IconButton>
          <EmojiEmotionsIcon />
        </IconButton>

        <textarea
          rows="1"
          className="message__input"
          placeholder="Enter your message..."
        />

        <IconButton>
          <SendIcon />
        </IconButton>
      </footer>
    </div>
  );
}

export default Contact;
