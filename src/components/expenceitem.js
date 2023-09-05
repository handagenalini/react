import './expenseitem.css';
function expenceitem(){
    const expensedate=new Date(2023,6,22);
    console.log(expensedate)
    const expensetitle="Food"
    const expenseAmount=100
    return (<div className='expense-item'>
        <div>{expensedate.toISOString()}</div>
        <div className='expense-item__description'>
            <h2>{expensetitle}</h2>
            <div className='expense-item__price'>${expenseAmount}</div>
          
            </div>
            </div>)
            }
export default expenceitem;