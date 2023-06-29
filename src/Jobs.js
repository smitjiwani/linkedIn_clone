import React from 'react'
import Header from './Header'
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";
import Login from './Login';

function Jobs() {
  const user = useSelector(selectUser);
  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">

            <span>jobs page</span>
          </div>
        </>
      )}

    </div>
  )
}

export default Jobs
