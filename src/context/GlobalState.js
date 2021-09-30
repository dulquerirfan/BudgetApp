import {createContext,useReducer} from 'react';
import AppReducer from './AppReducer';
//Intial state
const intialState={
    transactions:[ ]
}

//create context
export const GlobalContext=createContext(intialState);

//provider component
export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,intialState);
    //action
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload:transaction
        });
    }
    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}