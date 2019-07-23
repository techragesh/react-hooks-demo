import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const AccountContext = createContext();

const BookContextProvider = props => {
  const [accounts, setAccounts] = useState([
    { name: 'John Doe', role: 'Admin', id: 1 },
    { name: 'Peter', role: 'Government', id: 2 }
  ]);
  const addAccount = (name, role) => {
    setAccounts([...accounts, { name, role, id: uuid() }]);
  };
  const deleteAccount = id => {
    setAccounts(accounts.filter(account => account.id !== id));
  };

  return (
    <AccountContext.Provider value={{ accounts, addAccount, deleteAccount }}>
      {props.children}
    </AccountContext.Provider>
  );
};

export default BookContextProvider;
