import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import AutocompleteOption from "./AutocompleteOption./AutcompleteOption";
import { updateInput } from "../../redux/autocompleteInput/ipnutActionsCreators";
import { updateAUsers, updateCurrIndex } from "../../redux/autocompleteUsers/aUsersActionsCreators";

import "./searchBar.css";

const SearchBar = ({
  users,
  autocompleteInput,
  updateInput,
  autocompleteUsers,
  updateAUsers,
  currIndex,
  updateCurrIndex
}) => {


  const handleChange = (e) => {
    updateCurrIndex(0)
    updateInput(e.target.value);
  };
  
  const handleKeyDown = (e)=>{
    if(autocompleteUsers.length>0){
    switch (e.key){
      case "ArrowDown":{
        if(currIndex===autocompleteUsers.length-1){
          updateCurrIndex(0)
        }
        else{
          updateCurrIndex(currIndex+1)
        }
        break;
      }
      case "ArrowUp":{
        if(currIndex===0){
          updateCurrIndex(autocompleteUsers.length-1)
        }
        else{
          updateCurrIndex(currIndex-1)
        }
        break;
      }
      case "Enter": {
        updateCurrIndex(0)
        updateInput(autocompleteUsers[currIndex])

      }

    }
  }
  }



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
        )
        .map(user => user.name)

      updateAUsers(tempUsers);
    }
  }, [autocompleteInput]);

  return (
    <>
      <form className="searchForm" onSubmit={e=>{e.preventDefault();console.log(autocompleteInput)}}>
        <input
          className="searchBar"
          value={autocompleteInput}
          onChange={handleChange}
          type="text"
          placeholder="User"
          onKeyDown={handleKeyDown}
        ></input>
        <button className="submitBtn">Submit</button>
      </form>
      <ul className="autoCompleteOptions">
        {autocompleteUsers.map((name,index) => (
          <AutocompleteOption key={name} isActive={currIndex===index} name={name} />
        ))}
      </ul>
    </>
  );
}; 

const mapStateToProps = ({
  userReducer,
  autocompleteInput,
  aUsersReducer,
}) => ({
  users: userReducer.users,
  autocompleteInput: autocompleteInput.autocompleteInput,
  autocompleteUsers: aUsersReducer.aUsers,
  currIndex: aUsersReducer.currIndex
});
const mapDispatchToProps = {
  updateInput,
  updateAUsers,
  updateCurrIndex
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
