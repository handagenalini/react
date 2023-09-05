import './expenseitem.css';
import ExpenseDate from "./expensedate";
import ExpenseDetails from "./expensedetails";
import Card from "./card"
function expenceitem(props){
  
    return (<div className='expense-item'>
      <Card className="expense-item">
    
     <ExpenseDate date={props.date}></ExpenseDate>
    
        
     
  
        <ExpenseDetails title={props.title} price={props.title}></ExpenseDetails>
        </Card>
        </div>
           )
        
            }
export default expenceitem;