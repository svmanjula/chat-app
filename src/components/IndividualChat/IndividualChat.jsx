import { BsThreeDots } from "react-icons/bs";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./IndividualChat.css";

const IndividualChat = ({ person, messages }) => {
  return (
    <div>
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
    </div>
  );
};

export default IndividualChat;
