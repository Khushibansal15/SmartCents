// src/components/ExpenseForm.js
import React, { useState } from 'react';
import './expenseForm.css';
const ExpenseForm = ({ onAddExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const amountValue = parseFloat(amount);
    if (isNaN(amountValue) || amountValue <= 0) {
      setError('Please enter a valid positive number for the amount.');
      return;
    }
    onAddExpense({ description, amount: parseFloat(amount) });
    setDescription('');
    setAmount('');
    setError('');
  };

  return (
    <div className='expenseForm'>
      <form onSubmit={handleSubmit}>
       <div className='newexpense'>
       <input
       className='amount'
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            required
        />
        <input
          className='amount'
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
       </div><br></br>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
