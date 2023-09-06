import { useState } from "react";
import "./expenseform.css";

function ExpenseForm() {

  const [enteredTitle,setEnteredTitle]= useState("")
  const [enteredAmount,setEnteredAmount]= useState("")
  const [enteredDate,setEnteredDate]= useState("")


  function titleChangeHandler(event){
    setEnteredTitle(event.target.value)
  }
  function amountChangeHandler(event){
    setEnteredAmount(event.target.value)
  }  
  function dateChangeHandler(event){
    setEnteredDate(event.target.value)
  }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label> Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__controls">
          <label> Amount</label>
          <input type="number" min="1" step="0.5" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <label> Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" >Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;