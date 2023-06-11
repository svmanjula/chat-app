import React, { useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./MessagesPage.css";

const MessasesPage = ({ data }) => {
  const [toggleSearch, setToggleSearch] = useState(false);
  console.log(data);
  return (
    <div >
      
      {/* search bar */}

      {toggleSearch ? (
        <div className="search-container">
          <HiOutlineArrowLeft
            className="arrow-icon"
            onClick={() => {
              setToggleSearch(false);
            }}
          />
          <input className="search-bar" placeholder="search here" />
          <RiSearchLine className="search-icon" />
        </div>
      ) : (
        <div className="search-container">
          <HiOutlineArrowLeft />
          <RiSearchLine
            onClick={() => {
              setToggleSearch(true);
            }}
          />
        </div>
      )}

      {/* heading */}

      <nav>
        <h3>Messages</h3>
        <h3 className=" heading-disabled ">Calls</h3>
        <h3 className=" heading-disabled ">Groups</h3>
      </nav>

      {/* fav messages container */}

      <h4 className="disabled title-fav">Favourites </h4>
      <div className="container-fav">
        {data.map((person) => {
          return (
            <div key={person.id}>
              <Link to={`/chat/${person.id}`}>
                {person.id === 2 ? (
                  <div className="fav-new-chat">
                    <img src={person.avatar} alt="/avatar" />
                  </div>
                ) : (
                  <img src={person.avatar} alt="/avatar" />
                )}
              </Link>

              <h5 className="person-name"> {person.name.slice(0, 5)}</h5>
            </div>
          );
        })}
      </div>
      <hr className="hr-line" />
      {/* messages container */}
      {data.map((person) => {
        return (
          <div key={person.id} className="messages-container">
            <Link to={`/chat/${person.id}`}>
              <img src={person.avatar} alt="/avatar" />
            </Link>
            <div className="flex-grow-item">
              <div className="message-container">
                <div>
                  <h3>{person.name} </h3>
                  <h5 className="disabled">{person.newmessage}</h5>
                </div>
                <div className="flex-item ">
                 
                  {person.id % 2 !== 0 ? (
                    <div className="new-text-container">  <div> {person.timestamp}</div>
                    <div className="text-number"> {person.id}</div></div>)
                    :( <div> {person.timestamp}</div>)
                  
                }
                </div>
              </div>
              {person.id < 4 && <hr className="hr-line flex-item-hr" />}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessasesPage;
