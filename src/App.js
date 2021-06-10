import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {getUsersFromAPI as getUsers} from './redux/user/userActionsCreators'

const App = (props) => {
  console.log(props)
  const {users,loading,error,getUsers} = props
useEffect(()=>{

  getUsers()

},[])
  return (
    <div className="App">
      {JSON.stringify(users,null,2)}
    </div>
  );
}

const mapStateToProps = ({users,loading,error}) => ({users,loading,error})
const mapDispatchToProps = {
    getUsers
  }

const AppWithRedux = connect(mapStateToProps,mapDispatchToProps)(App)

export default AppWithRedux;
