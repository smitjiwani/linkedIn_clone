import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import Login from './Login';

function Network() {
  const user = useSelector(selectUser);
  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">

            <span>Network page</span>
          </div>
        </>
      )}

    </div>
  )
}

export default Network
