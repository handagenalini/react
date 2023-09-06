import "./newexpense.css"
import ExpenseForm from "./expence"


function NewExpense(props){
    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler}></ExpenseForm>
        </div>
    )
}
export default NewExpense 

