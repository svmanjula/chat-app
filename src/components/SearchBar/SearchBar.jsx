import React, { useState } from "react";
import "./SearchBar.css";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";

const SearchBar = ({ handleSearchChange, searchQuery }) => {
  const [toggleSearch, setToggleSearch] = useState(false);

  return (
    <div>
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
            onChange={(e) => handleSearchChange(e)}
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
    </div>
  );
};

export default SearchBar;
