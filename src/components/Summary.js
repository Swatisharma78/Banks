import React from 'react';

const Summary = ({ totalIncome, totalExpenses, netBalance }) => {
  return (
    <div className="summary" style={{ animation: 'fadeIn 1s ease-in-out' }}>
      <h2>Summary</h2>
      <p>Total Income: ${totalIncome}</p>
      <p>Total Expenses: ${totalExpenses}</p>
      <p>Net Balance: ${netBalance}</p>
    </div>
  );
};

export default Summary;