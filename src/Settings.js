import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from "./features/counter/userSlice";
import Login from './Login';
import Header from './Header';

function Settings() {
    const user = useSelector(selectUser);
  return (
    <div>
      <div>
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">

            <span>Account page</span>
          </div>
        </>
      )}

    </div>
    </div>
  )
}

export default Settings
