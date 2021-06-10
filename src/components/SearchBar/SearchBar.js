import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AutocompleteOption from "./AutocompleteOption./AutcompleteOption";

import "./searchBar.css";

const SearchBar = ({ users }) => {
  const [userInput, setUserInput] = useState("");
  const [auotcompleteUsers, setAutocompleteUsers] = useState([]);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  useEffect(() => {

    if (userInput.trim() === "") {

      setAutocompleteUsers([]);

    } else {

      const tempUsers = users
        .filter(
          (user) =>
            user.name.toLowerCase().indexOf(userInput.trim().toLowerCase()) >= 0
        )
        .map((user) => <AutocompleteOption name={user.name}/>);

      setAutocompleteUsers(tempUsers);

    }
  }, [userInput]);

  return (
    <>
      <form className="searchForm">
        <input
          className="searchBar"
          value={userInput}
          onChange={handleChange}
          type="text"
          placeholder="User"
        ></input>
        <button className="submitBtn">Submit</button>
      </form>
      <ul className="autoCompleteOptions">
        {auotcompleteUsers}
      </ul>
    </>
  );
};

const mapStateToProps = ({ users }) => ({ users });

export default connect(mapStateToProps)(SearchBar);
