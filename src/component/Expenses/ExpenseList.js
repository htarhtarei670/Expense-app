import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList=({fliterExpense})=>{
    if(fliterExpense.length === 0){
        return <h2 className="expenses-list__fallback">No Expense Yet!!</h2>
    }
    if(fliterExpense.length > 0){
        return (
            <ul className="expenses-list">
                {fliterExpense.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </ul>
        )
    }
}
export default ExpenseList;