import React from "react";
import { connect } from "react-redux";
import { updateInput } from "../../../redux/autocompleteInput/ipnutActionsCreators";
import { updateCurrIndex } from "../../../redux/autocompleteUsers/aUsersActionsCreators";

import { boldSubstr } from "../../../utils/utils";
import "./autocompleteOption.css";

const AutocompleteOption = (props) => {
  const { name,autocompleteInput,updateInput, isActive,updateCurrIndex } = props;

  const handleClick = () => {
    updateInput(name);
    updateCurrIndex(0);
  };
 
  return (
    <li
      className={isActive?"autocompleteOption autocompleteOption-active":"autocompleteOption"}
      dangerouslySetInnerHTML={{ __html: boldSubstr(name,autocompleteInput) }}
      onClick={handleClick}
    />
  );
};
const mapStateToProps = ({ autocompleteInput }) => ({
  autocompleteInput: autocompleteInput.autocompleteInput,
});

const mapDispatchToProps = {
  updateInput,
  updateCurrIndex
};

export default connect(mapStateToProps, mapDispatchToProps)(AutocompleteOption);
