import React, { useContext } from 'react';
import { AccountContext } from '../contexts/AccountContext';

const AccountDetail = ({ account }) => {
  const { deleteAccount } = useContext(AccountContext);
  return (
    <li onClick={() => deleteAccount(account.id)}>
      <div className="title">{account.name}</div>
      <div className="author">{account.role}</div>
    </li>
  );
};

export default AccountDetail;
