import Card from "./component/UI/Card";
import "./component/Expenses/Expenses.css";
import Expenses from "./component/Expenses/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";
import { useState } from "react";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
  },
  {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
  },
  ];

const App=()=> {
  const [formData,setFormData]=useState(expenses);

  const onSaveNewExpenseHandler=(newExpense)=>{
    //to store new expense data on array
    setFormData((formData)=>[newExpense,...formData]);
  }
  return (
    <Card className="expenses">
      <h1>let's get started</h1> 
      <NewExpense onSaveNewExpense={onSaveNewExpenseHandler}/>
      <Expenses expenses={formData} />
    </Card>
  );
}

export default App;