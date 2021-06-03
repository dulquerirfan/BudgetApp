import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
export default function History() {
    const {transactions}=useContext(GlobalContext);
    return (
        <div className="History">
            <h2>HISTORY</h2>
            <ul>
                {transactions.map(transaction=>(<li className={transaction.amount<0?'minus':'plus'}key={transaction.id}>{transaction.text} <span>Rs.{transaction.amount<0?'-':'+'}{Math.abs(transaction.amount)}</span></li>))}  
            </ul>
        </div>
    )
}
