import React from 'react';

const TransactionTable = ({ transactions }) => {
  return (
    <table className="transaction-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Transaction Type</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.type}</td>
            <td>{transaction.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;