import React from 'react'
import { Link } from 'react-router-dom';
import "./MessagesList.css"

const MessagesList = ({filteredData}) => {
  return (
    <div>
       {filteredData.map((person) => {
        return (
          <div key={person.id} className="messages-container">
            <Link to={`/chat/${person.id}`}>
              <img src={person.avatar} alt="/avatar" />
            </Link>
            <div className="flex-grow-item">
              <div className="message-text-container">
                <div>
                  <Link to={`/chat/${person.id}`} className="link">
                    <h3>{person.name} </h3>
                  </Link>
                  <h5 className="disabled">
                    {person.messages[person.messages.length - 1].text}
                  </h5>
                </div>
                <div className="flex-item ">
                  {person.id % 2 !== 0 ? (
                    <div className="new-text-container">
                      <div> {person.timestamp}</div>
                      <div className="text-number"> {person.id}</div>
                    </div>
                  ) : (
                    <div> {person.timestamp}</div>
                  )}
                </div>
              </div>
              {person.id < 4 && <hr className="hr-line flex-item-hr" />}
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default MessagesList
