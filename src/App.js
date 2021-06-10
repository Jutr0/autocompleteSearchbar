import React, { useEffect } from "react";
import { connect } from "react-redux";
import SearchBar from "./components/SearchBar/SearchBar";

import { getUsersFromAPI as getUsers } from "./redux/user/userActionsCreators";

import "./app.css";

const App = (props) => {
  const { users, loading, error, getUsers } = props;
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="App">
      <SearchBar />
    </div>
  );
};

const mapStateToProps = ({ users, loading, error }) => ({
  users,
  loading,
  error,
});
const mapDispatchToProps = {
  getUsers,
};

const AppWithRedux = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppWithRedux;
