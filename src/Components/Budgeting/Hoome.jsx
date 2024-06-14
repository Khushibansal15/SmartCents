// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import BudgetRule from './BudgetRule';
import ExpenseForm from './ExpenseForm'
import { useNavigate } from 'react-router-dom';
import './home.css';
import NavBlack from '../navbarBlack/NavBlack';

const Home = ({ onSalarySubmit, budget, setBudget, necessities, wants }) => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const [insufficientFundsPopup, setInsufficientFundsPopup] = useState(false);
  const [insufficientFundsExpense, setInsufficientFundsExpense] = useState(null);
  const [insufficientFundsCategory, setInsufficientFundsCategory] = useState('');

  const [savingsFinishedPopup, setSavingsFinishedPopup] = useState(false);
  const [savingsInsufficientPopup, setSavingsInsufficientPopup] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedNecessities(necessities);
    setSelectedWants(wants);
  }, [necessities, wants]);

  const [selectedNecessities, setSelectedNecessities] = useState([]);
  const [selectedWants, setSelectedWants] = useState([]);


  const handleSalarySubmit = (budgetData) => {
    setBudget(budgetData);
    onSalarySubmit(budgetData);
  };

  const handleAddExpense = (expense) => {
    const amount = parseFloat(expense.amount);
    const isNecessity = selectedNecessities.some((item) => item.name.toLowerCase() === expense.description.toLowerCase());
    const isWant = selectedWants.some((item) => item.name.toLowerCase() === expense.description.toLowerCase());

    if (!isNecessity && !isWant) {
      // Show the popup if the description doesn't match any necessity or want
      setNewExpense(expense);
      setShowPopup(true);
    } else {
      // Directly handle the expense if it's already categorized
      handleExpenseCategorization(expense, isNecessity ? 'necessity' : 'want');
    }
  };
  const handleExpenseCategorization = (expense, category) => {
    const amount = parseFloat(expense.amount);
    let updatedBudget = { ...budget };

    if (category === 'necessity') {
      if (updatedBudget.necessity >= amount) {
        updatedBudget.necessity -= amount;
      } else {
        setInsufficientFundsExpense(expense);
        setInsufficientFundsCategory(category);
        setInsufficientFundsPopup(true);
        return;
      }
    } else if (category === 'want') {
      if (updatedBudget.want >= amount) {
        updatedBudget.want -= amount;
      } else {
        setInsufficientFundsExpense(expense);
        setInsufficientFundsCategory(category);
        setInsufficientFundsPopup(true);
        return;
      }
    }
    const categorizedExpense = { ...expense, category };

    setBudget(updatedBudget);
    setExpenses([...expenses, categorizedExpense]);

    
  };
  const handlePopupSubmit = (category) => {
    if (newExpense) {
      // Update the selected necessities or wants based on the category
      if (category === 'necessity') {
        setSelectedNecessities([...selectedNecessities, { name: newExpense.description }]);
      } else if (category === 'want') {
        setSelectedWants([...selectedWants, { name: newExpense.description }]);
      }

      // Handle the expense with the new category
      handleExpenseCategorization(newExpense, category);

      // Clear the new expense and hide the popup
      setNewExpense(null);
      setShowPopup(false);
    }
    
  };
  const handleInsufficientFundsContinue = () => {
    if (insufficientFundsExpense && insufficientFundsCategory) {
      const amount = parseFloat(insufficientFundsExpense.amount);
      let updatedBudget = { ...budget };

      if (insufficientFundsCategory === 'necessity') {
        if (updatedBudget.savings >= (amount - updatedBudget.necessity)) {
          updatedBudget.savings -= (amount - updatedBudget.necessity);
          updatedBudget.necessity = 0;
          if(updatedBudget.savings===0){
            setSavingsFinishedPopup(true);
          }
        } else {
          setSavingsInsufficientPopup(true);
          setInsufficientFundsExpense(null);
          setInsufficientFundsCategory('');
          setInsufficientFundsPopup(false);
          return;
        }
      } else if (insufficientFundsCategory === 'want') {
        if (updatedBudget.savings >= (amount - updatedBudget.want)) {
          updatedBudget.savings -= (amount - updatedBudget.want);
          updatedBudget.want = 0;
          if(updatedBudget.savings===0){
            setSavingsFinishedPopup(true);
          }
        } else {
          setSavingsInsufficientPopup(true);
          setInsufficientFundsExpense(null);
          setInsufficientFundsCategory('');
          setInsufficientFundsPopup(false);
          return;
        }
      }

      const categorizedExpense = { ...insufficientFundsExpense, category: insufficientFundsCategory };

      setBudget(updatedBudget);
      setExpenses([...expenses, categorizedExpense]);

      // Clear the insufficient funds expense and hide the popup
      setInsufficientFundsExpense(null);
      setInsufficientFundsCategory('');
      setInsufficientFundsPopup(false);
    }
  };

  const handleOverlayClick = (event) => {
    if (event.target.className.includes('popup-overlay')) {
      setSavingsFinishedPopup(false);
      setInsufficientFundsPopup(false);
      setSavingsInsufficientPopup(false);
    }
  };

  return (
    <div>
      <NavBlack/>
      <BudgetRule onSalarySubmit={handleSalarySubmit} />
      <div className='division'>
        <h3>Necessity <span>₹{budget.necessity}</span></h3>
        <h3>Want <span>₹{budget.want}</span></h3>
        <h3>Savings <span>₹{budget.savings}</span></h3>
      </div>
      <div className='step2'>
        <h2>Categorize your spending into Necessities and Wants.</h2>
        <div className='underline'></div>
        <button onClick={() => navigate('/select-necessities-wants')}>Select Necessities and Wants</button>
      </div>
      <div className='selectedResult'>
      <div>
        <h3>Selected Necessities</h3>
        <select>
          {selectedNecessities.map((item, index) => (
            <option key={index}>{item.name}</option>
          ))}
        </select>
        </div>
        <div>
        <h3>Selected Wants</h3>
        <select>
          {selectedWants.map((item, index) => (
            <option key={index}>{item.name}</option>
          ))}
        </select>
        </div>
      </div>
      <div className='step3'>
        <h2>Keep a record of your Expenses.</h2>
        <div className='underline'></div>
        <ExpenseForm onAddExpense={handleAddExpense} />
        {showPopup && (
        <div className='popup-overlay'>
            <div className="popup-content">
            <h2>New Expense Category</h2>
            <p>Is "{newExpense.description}" a necessity or a want?</p>
            <button onClick={() => handlePopupSubmit('necessity')}>Necessity</button>
            <button onClick={() => handlePopupSubmit('want')}>Want</button>
          </div>
        </div>
      )}
      {insufficientFundsPopup && (
        <div className='popup-overlay'>
            <div className="popup-content">
            <h2>Insufficient Funds</h2>
            <p>There are insufficient funds in the {insufficientFundsCategory} category. The remaining amount will be deducted from savings.</p>
            <button onClick={handleInsufficientFundsContinue}>Continue</button>
          </div>
        </div>
      )}
        {savingsInsufficientPopup && (
        <div className="popup-overlay" onClick={handleOverlayClick}>
          <div className="popup-content">
            <h2>Insufficient Funds</h2>
            <p>Insufficient funds in savings for this expense. Please adjust your expenses.</p>
            <button onClick={() => setSavingsInsufficientPopup(false)}>Close</button>
          </div>
        </div>
      )}
      {savingsFinishedPopup && (
        <div className="popup-overlay" onClick={handleOverlayClick}>
          <div className="popup-content">
            <h2>Savings Finished</h2>
            <p>Your savings are finished. Check out the monthly reports to see where you have spent the money.</p>
            <button onClick={() => navigate('/report')}>Monthly Reports</button>
          </div>
        </div>
      )}
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.description}: ₹{expense.amount.toFixed(2)} ({expense.category})
            </li>
          ))}
        </ul>
      </div>
      
      <div className='step4'>
        <h2>Evaluate and analyze your spendings.</h2>
        <div className='underline'></div>
        <button onClick={() => navigate('/report')}>Your Monthly Reports</button>
      </div>
    </div>
  );
};

export default Home;
