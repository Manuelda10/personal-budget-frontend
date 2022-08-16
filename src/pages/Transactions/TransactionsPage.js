import React, {useEffect, useState, useCallback} from 'react'
import Transaction from '../../components/Transaction/Transaction'

import getTransactions from '../../services/transaction/getTransactions'
import './index.css' 
import getCategories from '../../services/category/getCategories'
import getTypes from '../../services/type/getTypes'
import getCategoriesByType from '../../services/category/getCategoriesByType'
import Menu from '../../components/Menu/Menu'
import getTransactionsByType from '../../services/transaction/getTransactionsByType'
import getTransactionsByCategory from '../../services/transaction/getTransactionsByCategory'
import createTransaction from '../../services/transaction/createTransaction'
import updateTransaction from '../../services/transaction/updateTransaction'
import deleteTransaction from '../../services/transaction/deleteTransaction'

const TransactionsPage = ({handleGetAllTransactions}) => {

    const [transactions, setTransactions] = useState([])
    const [categories, setCategories] = useState([])
    const [types, setTypes] = useState([])

    const handleGetTransactions = useCallback((id, filter) => {
        if (id === 'all' || id === undefined) {
            getTransactions().then(data => setTransactions(data))
        } else {
            if (filter === 'category') {
                handleGetTransactionsByCategory(id)
            } else {
                handleGetTransactionsByType(id)
            }
        }
        handleGetAllTransactions()
    },[handleGetAllTransactions])
    
    const handleGetTransactionsByType = (id) => {
        getTransactionsByType(id).then(data => setTransactions(data))
    }

    const handleGetTransactionsByCategory = (id) => {
        getTransactionsByCategory(id).then(data => setTransactions(data))
    } 

    const handleGetCategories = (id) => {
        if (id !== undefined && id !== 'all') {
            getCategoriesByType(id).then(data => setCategories(data))
        } else {
            getCategories().then(data => setCategories(data))
        }
    }

    const handleGetTypes = () => {
        getTypes().then(data => setTypes(data))
    }

    const handleCreateTransaction = (transaction) => {
        createTransaction({transaction}).then(res => handleGetTransactions())
    }

    const handleUpdateTransaction = (id, transaction) => {
        updateTransaction(id, {transaction}).then(res => handleGetTransactions())
    }

    const handleDeleteTransaction = (id) => {
        deleteTransaction(id).then(res => handleGetTransactions())
    }

    useEffect(() => {
        handleGetTransactions()
        handleGetCategories()
        handleGetTypes()
    },[handleGetTransactions])


    return (
        <div className='transactions-page' >
            <div className='transactions-page-title' >
                <h2>My Transactions</h2>
            </div>
            
            <Menu
                categories={categories}
                types={types}
                handleGetCategories={handleGetCategories}
                handleGetTransactions={handleGetTransactions}
                handleCreateTransaction={handleCreateTransaction}
                handleUpdateTransaction={handleUpdateTransaction}
                ></Menu>

            <div className='transactions-page-content'>
                {
                    transactions.map(transaction => {
                        return (
                            <Transaction
                                key = {transaction.id}
                                id ={ transaction.id}
                                concept={transaction.concept}
                                amount={transaction.amount}
                                date={transaction.date}
                                categoryId={transaction.categoryId}
                                typeId={transaction.typeId}
                                handleUpdateTransaction={handleUpdateTransaction}
                                handleDeleteTransaction={handleDeleteTransaction}
                            > </Transaction>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default TransactionsPage
