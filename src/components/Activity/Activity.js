import React from 'react'
import Item from './Item'
import './index.css'

const Activity = ({ transactions }) => {

    transactions.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date)
    })

    const orderedTransactions = transactions.slice(0, 10)

    return (
        <div className='activity-container' >
            <div className='items-container'>
                {
                    orderedTransactions.map(transaction => {
                        return (<Item income={transaction.typeId === 1}
                            key={transaction.id}
                            concept={transaction.concept}
                            amount={transaction.amount}
                            date={transaction.date}>
                        </Item>)
                    })
                }
            </div>  
        </div>
    )
}

export default Activity