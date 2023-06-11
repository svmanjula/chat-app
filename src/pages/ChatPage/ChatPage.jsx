import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import "./ChatPage.css";

const ChatPage = ({ data }) => {
  const { id } = useParams();

  const person = data.find((data) => data.id === Number(id));

  const [inputText, setInputText] = useState();
  const [messages, setMessages] = useState([...person.messages]);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText !== " ") {
      const newMessage = {
        sender: "Alice",
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
        setMessages((prevMessgaes) => [...prevMessgaes, newMessageReply()]);
      }, [2000]);

      setMessages([...newArray]);
      setInputText("");
    }
  };
  console.log(messages);
  const handleTextareaResize = (e) => {
    e.target.style.height = "auto"; // Reset the height to auto
    e.target.style.height = `${e.target.scrollHeight}px`; // Set the height based on content
  };
  const handleTextareaBlur = (e) => {
    e.target.style.height = ""; // Reset the height to its default value
  };

  return (
    <div>
      <div className="person-container">
        <Link to="/" className="link">
          <HiOutlineArrowLeft className="back-arrow-icon" />{" "}
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
              {message.sender === "Alice" ? (
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
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <button
            className="mailer-icon-container"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            <SiMinutemailer className="mailer-icon" />
          </button>

          <textarea
            placeholder="Type new message"
            className="text-input"
            value={inputText}
            onChange={(e) => handleChange(e)}
            onInput={handleTextareaResize}
            onBlur={handleTextareaBlur}

          />
        </form>
      </div>
    </div>
  );
};

export default ChatPage;
