import React, { useEffect } from "react";
import { connect } from "react-redux";
import SearchBar from "./components/SearchBar/SearchBar";

import { getUsersFromAPI } from "./redux/user/userActionsCreators";

import "./app.css";

const App = (props) => {
  const { users, loading, error, getUsersFromAPI } = props;

  useEffect(() => {
    getUsersFromAPI();
  }, []);
  return (
    <div className="App">
      <SearchBar />
    </div>
  );
};

const mapStateToProps = ({ userReducer }) => ({
  users: userReducer.users,
  loading: userReducer.loading,
  error: userReducer.error,
});
const mapDispatchToProps = {
  getUsersFromAPI,
};

const AppWithRedux = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppWithRedux;
