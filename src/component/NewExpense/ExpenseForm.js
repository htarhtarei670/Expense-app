import { useState } from "react";
import "./ExpenseForm.css"
const ExpenseForm=(props)=>{
    const[title,setTitle]=useState("");
    const[amount,setAmount]=useState("");
    const[dateValue,setDateValue]=useState("");

    const titleHandler=(e)=>{
        setTitle(e.target.value);
    }

    const amountHandler=(e)=>{
        setAmount(e.target.value);
    }

    const dateHandler=(e)=>{
        setDateValue(e.target.value);
    }
    
    const submitHandler=(e)=>{
        e.preventDefault();

        const expense={
            id: "e1",
            title,
            amount,
            date: new Date(dateValue),
        }
        
        setTitle("");
        setAmount("");
        setDateValue("")

        props.onSaveExpenseForm(expense);
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleHandler} value={title}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="text" onChange={amountHandler} value={amount}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"  min="2019-01-01" max="2023-12-31" onChange={dateHandler} value={dateValue}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;