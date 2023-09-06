// import react from "react";
import ExpenseDate from "./expensedate";
import ExpenseDetails from "./expensedetails";
import Card from "../ui/card";
import "./expenseitem.css";
import { useState } from "react";
const ExpenseItem=(props)=> {

  const [title,setTitle]=useState(props.title)
  const [price,setPrice]=useState(props.price)

  function edittitleHandler(){
    setTitle("Updated")
  }
  function editPriceHandler(){
    setPrice(100)
  }
  function deleteHandler(){
    console.log("Delete!!")
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetails title={title} price={price}></ExpenseDetails>
      <button onClick={edittitleHandler} >Change Title</button>
      <button onClick={editPriceHandler} >Change Price</button>

      <button onClick={deleteHandler} >Delete</button>
    </Card>
  );
}
export default ExpenseItem;