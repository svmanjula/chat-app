import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import "./ChatPage.css";

const ChatPage = ({ userData }) => {
  const { id } = useParams();
  const textAreaRef = useRef(null);
  const person = userData.find((data) => data.id === Number(id));
  const [inputText, setInputText] = useState();
  const [messages, setMessages] = useState([...person.messages]);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
    e.target.style.height = `${e.target.scrollHeight}px`; // Set the height based on content
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  // const handleTextareaBlur = (e) => {
  //   e.target.style.height = ""; // Reset the height to its default value
  // };

  return (
    <div className="message-container">
      <div className="person-container">
        <Link to="/" className="link">
          <HiOutlineArrowLeft className="back-arrow-icon" />
        </Link>
        <div className="person-info-container">
          <h2> {person.name} </h2>
          <div>
            Active now <span className="circle-active"> </span>
          </div>
        </div>
        <BsThreeDots className="flex-item-dots" />
      </div>
      <div className="chat-container">
        {messages.map((message) => {
          return (
            <div key={message.timestamp} className="chat-message-container">
              {message.receiver ? (
                <div className=" flex-item-receiver">
                  <div className="receiver"> {message.text}</div>

                  {message.timestamp && (
                    <div className="timestamp">
                      {message.timestamp.substr(11, 5)}
                    </div>
                  )}
                </div>
              ) : (
                <div className="sender">
                  <img className="avatar" src={person.avatar} alt="/avatar" />

                  <div>
                    <div className="sender-text">{message.text}</div>
                    <div className="timestamp">
                      {message.timestamp && message.timestamp.substr(11, 5)}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="text-input-container">
        <button
          className="mailer-icon-container"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          <SiMinutemailer className="mailer-icon" />
        </button>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <textarea
            ref={textAreaRef}
            placeholder="Type new message"
            className="text-input"
            value={inputText}
            onChange={(e) => handleChange(e)}
            onKeyDown={(e) => handleKeyDown(e)}
            onInput={(e) => {
              handleTextareaResize(e);
            }}
            // onBlur={handleTextareaBlur}
          />
        </form>
      </div>
    </div>
  );
};

export default ChatPage;
