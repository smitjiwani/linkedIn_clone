import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Header from './Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Signup';
import Messages from './Messages';
import Network from './Network';
import Jobs from './Jobs';
import Notifs from './Notifs';
import Account from './Account';
import Settings from './Settings';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<App />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/message" element={<Messages />} />
        <Route path="/network" element={<Network />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/notifs" element={<Notifs />} />
        <Route path="/account" element={<Account />} />
        <Route path="/settings" element={<Settings />} />
        
      </Routes>
    </BrowserRouter>

    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
