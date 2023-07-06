import { useState } from "react";
import ExpenseDropDown from "./expenseDropDown";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses=({expenses})=>{
    const[selectYear,setSelectYear]=useState('all');

    const onFliterYearHandler=(selectedYear)=>{
        setSelectYear(selectedYear);
    }
   //to get all expense
   const allExpense=[...expenses];

    //to fliter expense by year
    const fliterExpense=expenses.filter((expense)=>{
        return expense.date.getFullYear().toString() ===selectYear;
    });

    return(
        <>
            <ExpenseChart expenses={fliterExpense}/>
            <ExpenseDropDown onFliterYear={onFliterYearHandler} selected={selectYear}/>
            {selectYear==="all"?<ExpenseList fliterExpense={allExpense}/>:<ExpenseList fliterExpense={fliterExpense}/>}
       </>
    )
}
export default Expenses;