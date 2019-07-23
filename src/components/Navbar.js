import React, { useContext } from 'react';
import { AccountContext } from '../contexts/AccountContext';

const Navbar = () => {
  const { accounts } = useContext(AccountContext);

  return (
    <div className="navbar">
      <h1>Account App</h1>
      <p>Currently you have {accounts.length} accounts</p>
    </div>
  );
};

export default Navbar;
