// src/components/BudgetRule.js
import React, { useState } from 'react';
import './budgetRule.css';
//import { useNavigate } from 'react-router-dom';

const BudgetRule = ({ onSalarySubmit }) => {
  const [salary, setSalary] = useState('');
  const [error, setError] = useState('');
  //const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const salaryValue = parseFloat(salary);
    if (isNaN(salaryValue) || salaryValue < 0) {
      setError('Please enter a valid non-negative number for salary.');
      return;
    }
    const necessity = (salary * 0.5).toFixed(2);
    const want = (salary * 0.3).toFixed(2);
    const savings = (salary * 0.2).toFixed(2);
    onSalarySubmit({ salary, necessity, want, savings });
    setError('');
    //navigate('/select-necessities-wants');
  };

  return (
    <div className='ruleContent'>
    <div className='ruleInfo'>
      <h2>50-30-20 Rule of Budgeting</h2>
      <p>The 50/30/20 rule is an easy budgeting method that can help you to manage your money effectively, simply and sustainably. The basic rule of thumb is to divide your monthly after-tax income into three spending categories: 50% for necessities, 30% for wants and 20% for savings or paying off debt.<br></br>By regularly keeping your expenses balanced across these main spending areas, you can put your money to work more efficiently. And with only three major categories to track, you can save yourself the time and stress of digging into the details every time you spend.</p>
    </div>
    <div className='step1'>
    <h2>Enter your monthly after-tax income.</h2>
    <div className='underline'></div>
      <form onSubmit={handleSubmit}>
        <input
        className='calculateinput'
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          placeholder="Enter your income"
          required
        />
        <button type="submit" className='calculatebutton'>Calculate</button>
      </form>
    </div>
    </div>
  );
};

export default BudgetRule;
