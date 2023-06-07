import React, { useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./MessagesPage.css";

const MessasesPage = ({ data }) => {
  const [toggleSearch, setToggleSearch] = useState(false);
  console.log(data);
  return (
    <div>
      {/* function for displaying search bar */}
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

      <nav>
        <h3>Messages</h3>
        <h3 className="disabled">Calls</h3>
        <h3 className="disabled">Groups</h3>
      </nav>

      <h4 className="disabled title-fav">Favourites </h4>

      <div className="container-fav">
        {data.map((person) => {
          return (
            <div key={person.id}>
              <Link to={`/chat/${person.id}`}>
                {" "}
                <img src={person.avatar} alt="/avatar" />
              </Link>

              <h5> {person.name.slice(0, 5)}</h5>
            </div>
          );
        })}
      </div>

      {data.map((person) => {
        return (
          <div>
            <hr className="line-break-chat" />
            <div key={person.id} className="message-chat-container">
              <Link to={`/chat/${person.id}`}>
                {" "}
                <img src={person.avatar} alt="/avatar" />
              </Link>

              <div>
                <h3>{person.name} </h3>
                <h5 className="disabled">{person.newmessage}</h5>
              </div>
              <div className="flex-item text-num-container ">
                <div> {person.timestamp}</div>
                {person.id % 2 !== 0 && (
                  <div className="text-number"> {person.id}</div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessasesPage;
