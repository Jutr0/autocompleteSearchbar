import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import store from "../../redux/store";
import AutocompleteOption from "./AutocompleteOption./AutcompleteOption";
import { updateInput } from "../../redux/autocompleteInput/ipnutActionsCreators";
import {updateAUsers} from '../../redux/autocompleteUsers/aUsersActionsCreators'


import "./searchBar.css";

const SearchBar = ({
  users,
  autocompleteInput,
  updateInput,
  autocompleteUsers,
  updateAUsers
}) => {

  const handleChange = (e) => {
    updateInput(e.target.value);
  };

  useEffect(() => {
    if (autocompleteInput.trim() === "") {
      updateAUsers([]);
    } else {
      const tempUsers = users
        .filter(
          (user) =>
            user.name
              .toLowerCase()
              .indexOf(autocompleteInput.trim().toLowerCase()) >= 0
        ).map(user=>user.name)
      updateAUsers(tempUsers);
    }
  }, [autocompleteInput]);

  return (
    <>
      <form className="searchForm">
        <input
          className="searchBar"
          value={autocompleteInput}
          onChange={handleChange}
          type="text"
          placeholder="User"
        ></input>
        <button className="submitBtn">Submit</button>
      </form>
      <ul className="autoCompleteOptions">{autocompleteUsers.map(name=>(<AutocompleteOption name={name}/>))}</ul>
    </>
  );
};

const mapStateToProps = ({ userReducer, autocompleteInput, aUsersReducer }) => ({
  users: userReducer.users,
  autocompleteInput: autocompleteInput.autocompleteInput,
  autocompleteUsers: aUsersReducer.aUsers
});
const mapDispatchToProps = {
  updateInput,
  updateAUsers
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
