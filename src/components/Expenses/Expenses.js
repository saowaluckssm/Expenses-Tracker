
import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css"



const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020")


  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses.js");
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  }


  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
    
  });
  
  
  
 
  // Note
  // {filteredExpense.length === 0 ? (
  //   <p>No expenses found.</p>
  // ):(
  //   filteredExpense.map(expense => 
  //    <ExpenseItem 
  //    key={expense.id}
  //    title={expense.title} 
  //    amount={expense.amount} 
  //    date={expense.date} />)
  // )} 


  return (
    <div>

    
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
    <ExpensesChart expenses={filteredExpenses} />
    
    <ExpensesList items={filteredExpenses} />
    
    </Card>
    </div>
  )
}

export default Expense
