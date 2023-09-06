import ExpenseItem from "./expenceitem"
import "./expenses.css"
import Card from "../ui/card"
function Expenses(props){
    console.log(props.items)
    return(
        <Card className="expenses">
            {props.items.map((item,index)=>{
                return(<ExpenseItem key={index} title={item.title} price={item.price} date={item.date}></ExpenseItem>)
            })}
        </Card>
    )
}
export default Expenses