import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import Expenses from './components/Expenses';
import Clock from './components/Clock';
import './App.css'; // Import a CSS file for the App component if needed

function App() {
  const [expenses, setExpenses] = useState([
    { title: 'mazda', amount: 3000, date: new Date(2020, 2, 28) },
    { title: 'ford', amount: 2000, date: new Date(2021, 3, 28) },
    { title: 'nisan', amount: 1000, date: new Date(2022, 4, 28) },
    { title: 'honda', amount: 500, date: new Date(2023, 5, 28) },
  ]);

  const addExpenseHandler = (expense) => {
    console.log("New Expense: ", expense); 
    setExpenses((prevExpenses) => {
      const updatedExpenses = [expense, ...prevExpenses];
      console.log("Updated Expenses: ", updatedExpenses); 
      return updatedExpenses;
    });
  };

  return (
    <div className="app-container">
      <Clock /> {/* Add the Clock component here */}
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
