import React, { useContext, useState } from 'react';
import { AccountContext } from '../contexts/AccountContext';

const AccountForm = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const { addAccount } = useContext(AccountContext);

  const handleSubmit = e => {
    e.preventDefault();
    addAccount(name, role);
    setName('');
    setRole('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Account Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Account Role"
        value={role}
        onChange={e => setRole(e.target.value)}
      />
      <input type="submit" value="Add Account" />
    </form>
  );
};

export default AccountForm;
