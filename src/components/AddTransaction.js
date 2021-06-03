import React,{useState,useContext} from 'react'
import {GlobalContext } from '../context/GlobalState';

export default function AddTransaction() {
    const [text,setText]=useState(" ");
    const [amount,setAmount]=useState(0);
    const {addTransaction} =useContext(GlobalContext);

    const onSubmit =e =>{
        e.preventDefault();

        const newTransaction = {
            id:Math.floor(Math.random() * 10000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }
    return (
        <div>
            <h2>ADD TRANSACTION</h2>
            <form onSubmit={onSubmit}>
                <label>
                    Description :
                    <input type="text" className='description' value={text} onChange={(e)=>setText(e.target.value)} placeholder='Ex:Description'/>
                </label><br/>
                <label>
                    Amount :
                    <input type="number" className='amount'value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Ex:100'/>
                </label><br/>
                <input type="submit" value="ADD" className="submit"/>

                
            </form>
        </div>
    )
}
