import React from 'react';
import uuid from 'uuid/v1';

const accountReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ACCOUNT':
      return [
        ...state,
        {
          name: action.account.name,
          role: action.account.role,
          id: uuid()
        }
      ];
    case 'DELETE_ACCOUNT':
      return state.filter(account => account.id !== action.id);
    default:
      return state;
  }
};

export default accountReducer;
