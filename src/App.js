import React from 'react';
import './App.css';
import AccountContextProvider from './contexts/AccountContext';
import AccountList from './components/AccountList';
import Navbar from './components/Navbar';
import AccountForm from './components/AccountForm';

function App() {
  return (
    <div className="App">
      <AccountContextProvider>
        <Navbar />
        <AccountList />
        <AccountForm />
      </AccountContextProvider>
    </div>
  );
}

export default App;
