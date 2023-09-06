
import Expenses from "./components/expense/expenses"
import NewExpense from"./components/newexpences/expence"
function App() {
  const expenses=[
    {
      title:"Food",
      price:500,
      date:new Date(2023,7,21)
    },
    {
      title:"House",
      price:50000,
      date:new Date(2023,7,21)
    },{
      title:"Car",
      price:5000,
      date:new Date(2023,7,21)
    },{
      title:"Bike",
      price:500000,
      date:new Date(2023,7,21)
    },
  ]
  return (
    <div>
    
      <NewExpense></NewExpense>
      <Expenses items={expenses}></Expenses>
     
     
    </div>
  );
}

export default App;
