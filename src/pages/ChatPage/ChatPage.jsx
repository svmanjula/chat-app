import React, { useState } from "react";
import "./ChatPage.css";
import IndividualChat from "../../components/IndividualChat/IndividualChat";
import { useParams } from "react-router-dom";
import TextInputBar from "../../components/TextInputBar/TextInputBar";

const ChatPage = ({ userData }) => {
  const { id } = useParams();
  const person = userData.find((data) => data.id === Number(id));
  const [messages, setMessages] = useState([...person.messages]);
  return (
    <div className="message-container">
      <IndividualChat userData={userData} person={person} messages={messages} />
      <TextInputBar
        person={person}
        messages={messages}
        setMessages={setMessages}
      />
    </div>
  );
};

export default ChatPage;
