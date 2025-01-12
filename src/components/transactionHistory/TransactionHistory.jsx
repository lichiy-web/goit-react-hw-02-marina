// import React from 'react';
import clsx from 'clsx';
import css from './TransactionHistory.module.css';

export default function TransactionHistory ({ transactions }) {
  return (
    <table className={clsx(css.thTable)}>
      <thead className={clsx(css.thTableHeader)}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(item => {
          return (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

// export default TransactionHistory;

