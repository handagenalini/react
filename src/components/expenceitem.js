import './expenseitem.css';
import ExpenseDate from "./expensedate";
import ExpenseDetails from "./expensedetails";
function expenceitem(props){
  
    return (<div className='expense-item'>
     
    
     <ExpenseDate date={props.date}></ExpenseDate>
    
        
     
  
        <ExpenseDetails title={props.title} price={props.title}></ExpenseDetails>
        </div>)
        
            }
export default expenceitem;