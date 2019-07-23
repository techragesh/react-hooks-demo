import React, { useContext } from 'react';
import { AccountContext } from '../contexts/AccountContext';
import AccountDetail from './AccountDetail';

const AccountList = () => {
  const { accounts } = useContext(AccountContext);

  return (
    <div className="account-list">
      <ul>
        {accounts.map(account => {
          return <AccountDetail account={account} key={account.id} />;
        })}
      </ul>
    </div>
  );
};

export default AccountList;
