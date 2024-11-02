"use client"
import { useDispatch, useSelector } from "react-redux"
import ReduxProvider from "/components/reduxProvider/reduxProvider"
import { useRef } from "react"
import { addTransaction ,deleteTransaction} from "/app/store/transactionSlice"


export const Child=()=>{
    return <ReduxProvider>
    <Transactions></Transactions>
</ReduxProvider>
}
function Transactions(){
        let dispatch=useDispatch()
        let transactions = useSelector(function(store){
            return store.transactionSlice.transactions;
})
        const descRef=useRef()
        const amountRef=useRef()
const handleSubmit=(e)=>{
e.preventDefault()

    const desc= descRef.current.value;
    const amount=amountRef.current.value;
    descRef.current.value="";
    amountRef.current.value=0;

  dispatch(addTransaction({id:Date.now(),desc,amount:Number(amount)}))
  
 }

 const getIncome=()=>{
    let income=0;
    for(let i=0;i<transactions.length;i++){
        if(transactions[i].amount>0)
            income=income+transactions[i].amount;
}
    return income;
 }
 const getExpense=()=>{
    let expense=0;
    for(let i=0;i<transactions.length;i++){
        if(transactions[i].amount<0)
            expense+=transactions[i].amount;
        
        }
    return expense;
 }
const Delete=(id)=>{
dispatch(deleteTransaction(id))
}
    
return (
        <div className="container">
<h1 className="text-center">Expense Tracker</h1>
<h3>Your Balance <br/> ${getIncome()+getExpense()}</h3>
<div className="expense-container">
<h3>INCOME <br/>${getIncome()}</h3>
<h3>EXPENSE<br/> ${getExpense()}</h3>          
</div>
<h3>History</h3>
<hr/>
<ul className="transaction-list">
    {
    transactions.map((transObj,index)=>{
      
return(
    <li key={transObj.id}>
    <span>${transObj.desc} </span>
    <span>${transObj.amount}</span>
    <button onClick={()=>
    Delete(transObj.id)
        }>delete</button>
    
</li>
 

)
    })
    }
    
</ul>
<h3>Add new transaction</h3>
<hr/>
<form className="transaction-form" onSubmit={handleSubmit}>
    <label>
        Enter Description <br/>
        <input type="text" placeholder="Description" ref={descRef} required/>
    </label>
    <br/>
    <label>
        Enter Amount <br/>
        <input type="number" placeholder="Amount" ref={amountRef} required />
    </label>
    <br/>
    <input type="submit" value="Add transaction"/>
   
</form>

        </div>
    
    );
}