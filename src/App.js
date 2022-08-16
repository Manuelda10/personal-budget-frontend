import { useCallback, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar';
import Overview from './pages/Overview/Overview';
import Hamburger from './components/Hamburger/Hamburger';
import TransactionsPage from './pages/Transactions/TransactionsPage';
import getTransactions from './services/transaction/getTransactions';
import './App.css';

function App() {

  const [ transactions , setTransactions] = useState([])

  const handleGetAllTransactions = useCallback(() => {
    getTransactions().then(data => setTransactions(data))
  }, [])

  useEffect(() => {
    handleGetAllTransactions()
  }, [handleGetAllTransactions])

  return (
    <div className="app">
      <Sidebar transactions={transactions}></Sidebar>
      <Routes>
        <Route path='/' element={<Overview
          transactions={transactions} ></Overview>} ></Route>
        <Route path='/transactions' element={<TransactionsPage
          handleGetAllTransactions={handleGetAllTransactions} ></TransactionsPage>} ></Route>
      </Routes>
      <div className='hamburger-container'>
            <Hamburger></Hamburger>
      </div>
    </div>
  );
}

export default App;
