import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
export default function Budget() {
   const {transactions}=useContext(GlobalContext);
   
   const amounts=transactions.map(transaction=>transaction.amount);
   const total=amounts.reduce((acc,item)=>(acc += item),0).toFixed(2);
    return (
        <div className="budget">
            <h3>BUDGET</h3>
            <h4>Rs.{total}</h4>
        </div>
    )
}
