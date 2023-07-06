import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"
const NewExpense=(props)=>{
    const onSaveExpenseHandler=(newExpenseForm)=>{
        const newExpenseFormObj={
            ...newExpenseForm,
            id:Math.random().toString()
        }
        props.onSaveNewExpense(newExpenseFormObj) 
    }
  
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseForm={onSaveExpenseHandler}/>
        </div>)
}
export default NewExpense;