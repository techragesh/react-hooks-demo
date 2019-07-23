import React, { useContext } from 'react';
import { AccountContext } from '../contexts/AccountContext';

const AccountDetail = ({ account }) => {
  const { dispatch } = useContext(AccountContext);
  return (
    <li onClick={() => dispatch({ type: 'DELETE_ACCOUNT', id: account.id })}>
      <div className="name">{account.name}</div>
      <div className="role">{account.role}</div>
    </li>
  );
};

export default AccountDetail;
