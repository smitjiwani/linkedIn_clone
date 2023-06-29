import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import Login from './Login';

function Notifs() {
  const user = useSelector(selectUser);
  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <span>Notifs page</span>
          </div>
        </>
      )}

    </div>
  )
}

export default Notifs
