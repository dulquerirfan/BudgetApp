import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
export default function IncomeExpense() {
    const {transactions}=useContext(GlobalContext);
    const amounts=transactions.map(transaction=>transaction.amount);
    const income=amounts
                 .filter(item=>item>0)
                 .reduce((acc,item)=>(acc += item),0)
                 .toFixed(2);
     const expense=amounts
     .filter(item=>item<0)
     .reduce((acc,item)=>(acc += item),0)*-1
     .toFixed(2);
    return (
        <div className='income'>
            <div className="Income">
                <h3>INCOME</h3>
                <h4>{income}</h4>
            </div>
            <div className="expense">
                <h3>EXPENSE</h3>
                <h4>{expense}</h4>
            </div>
        </div>
    )
}
