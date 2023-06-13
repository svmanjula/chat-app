import React, { useEffect, useRef, useState } from "react";
import { SiMinutemailer } from "react-icons/si";
import "./TextInputBar.css";

const TextInputBar = ({ person, messages, setMessages }) => {
  const [inputText, setInputText] = useState();
  const [textAreaEvent, setTextAreaEvent] = useState();
  const textAreaRef = useRef(null);

  const handleTextAreaChange = (e) => {
    setInputText(e.target.value);
  };

  const handleTextAreaSubmit = (e) => {
    e.preventDefault();
    if (textAreaEvent) {
      textAreaEvent.style.height = "auto";
    }
    if (inputText) {
      const newMessage = {
        receiver: "Alice",
        text: inputText,
        timestamp: new Date().toISOString(),
      };

      const newArray = [...messages, newMessage];

      setTimeout(() => {
        const newMessageReply = () => {
          return {
            sender: person.messages.sender,
            text: "hello",

            timestamp: new Date().toISOString(),
          };
        };
        setMessages((prevMessages) => [...prevMessages, newMessageReply()]);
      }, [2000]);

      setMessages([...newArray]);
      setInputText("");
    }
  };
  useEffect(() => {
    textAreaRef.current.scrollIntoView();
  }, [messages]);

  const handleTextareaResize = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
    setTextAreaEvent(e.target);
  };

  const handleKeyTextAreaDown = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      handleTextAreaSubmit(e);
    }
  };
  return (
    <div>
      <div className="text-input-container">
        <button
          className="mailer-icon-container"
          onClick={(e) => {
            handleTextAreaSubmit(e);
          }}
        >
          <SiMinutemailer className="mailer-icon" />
        </button>
        <form
          onSubmit={(e) => {
            handleTextAreaSubmit(e);
          }}
        >
          <textarea
            ref={textAreaRef}
            placeholder="Type new message"
            className="text-input"
            value={inputText}
            onChange={(e) => handleTextAreaChange(e)}
            onKeyDown={(e) => handleKeyTextAreaDown(e)}
            onInput={(e) => {
              handleTextareaResize(e);
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default TextInputBar;
