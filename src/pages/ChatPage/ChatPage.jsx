import React from "react";
import { useParams } from "react-router-dom";

const ChatPage = ({ data }) => {

const {id} = useParams()
console.log(useParams())

const messages = data.find( (data) => data.id === Number(id))


  return (
    <div>
      {messages.messages.map((message) => {
        return (
          <div>
            {
              <>
                <span>{message.sender}</span>:<span>{message.text}</span>
              </>
            }
          </div>
        );
      })}
    </div>
  );
};

export default ChatPage;
