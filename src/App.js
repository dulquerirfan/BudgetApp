import React from 'react'
import AddTransaction from './components/AddTransaction';
import Budget from './components/Budget';
import Header from './components/Header';
import History from './components/History';
import IncomeExpense from './components/IncomeExpense';
import '../src/App.css';
import {GlobalProvider} from './context/GlobalState';
export default function App() {
  return (
    <GlobalProvider>
      <div className="body">
      <Header className="Header"/>
      <Budget className="Budget"/>
      <IncomeExpense className="Income"/>
      <History className="History"/>
      <AddTransaction className="Add"/>
    </div>
    </GlobalProvider>
    
  )
}
