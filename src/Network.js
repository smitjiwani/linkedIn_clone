import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import Login from './Login';
import './Network.css'
import Card from './Card.jsx'
import Sidebar from "./Sidebar";
import People from './people.jsx';


function Network() {
  const user = useSelector(selectUser);
  return (
    <div >





{!user ? (
        <Login />
      ) : (



        <div>
        <Header />
        <div className='coll'>
          
          <Sidebar />
         <People></People>
        </div>
        </div>
      
      
       
      )}

    </div>
  )
}

export default Network
