import React, { useEffect, useState } from "react";
import Favourites from "../../components/Favourites/Favourites";
import MessagesList from "../../components/MessagesList/MessagesList";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./MessagesPage.css";

const MessagesPage = ({ userData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(userData);

  const handleSearchChange = (e) => {
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

  return (
    <div className="message-page">
      <SearchBar handleSearchChange={handleSearchChange} searchQuery={searchQuery} />
      <NavBar/>
      <Favourites filteredData={filteredData} />
      <MessagesList filteredData={filteredData} />
</div>
  );
};

export default MessagesPage;
