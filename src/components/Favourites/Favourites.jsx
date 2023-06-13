import React from "react";
import { Link } from "react-router-dom";
import "./Favourites.css";

const Favourites = ({ filteredData }) => {
  return (
    <div>
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
    </div>
  );
};

export default Favourites;
