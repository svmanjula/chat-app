import React, { useEffect, useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./MessagesPage.css";

const MessagesPage = ({ userData }) => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [filteredData, setFilteredData] = useState(userData);
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  //debounce function for search
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      const filtered = userData.filter((user) => {
        const filteredName = user.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const filteredMessages = user.messages.some((message) =>
          message.text.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return filteredName || filteredMessages;
      });
      setFilteredData(filtered);
    }, [1000]);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [userData, searchQuery, filteredData]);

  // useEffect(() => {
  //   const handleOutsideClick = (e) => {
  //     if (!e.target.closest(".search-bar")) {
  //       setFilteredData([...userData]);
  //       setSearchQuery("");
  //     }
  //   };

  //   document.body.addEventListener("click", handleOutsideClick);

  //   return () => {
  //     document.body.removeEventListener("click", handleOutsideClick);
  //   };
  // }, [userData]);

  console.log(filteredData);

  return (
    <div className="message-page" >
      {/* search bar */}

      {toggleSearch ? (
        <div className="search-container">
          <HiOutlineArrowLeft
            className="arrow-icon"
            onClick={() => {
              setToggleSearch(false);
            }}
          />
          <input
            className="search-bar"
            placeholder="search here"
            input={searchQuery}
            onChange={(e) => handleChange(e)}
          />
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
        {filteredData.map((person) => {
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
              <Link to={`/chat/${person.id}`} className="link">
                <h5 className="person-name"> {person.name.slice(0, 5)}</h5>
              </Link>
            </div>
          );
        })}
      </div>
      <hr className="hr-line" />
      {/* messages container */}
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
  );
};

export default MessagesPage;
