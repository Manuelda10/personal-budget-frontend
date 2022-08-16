import React from 'react'
import Activity from '../../components/Activity/Activity'
import Profile from '../../components/Profile/Profile'
import Card from '../../components/Card/Card'
import roundNumber from '../../helpers/roundNumber'
import './index.css'
import Chart from '../../components/Chart/Chart'
import getData from '../../helpers/getData'

const Overview = ({ transactions }) => {
    
    let positiveAmount = 0
    let negativeAmount = 0
    const data = getData(transactions, 4)
    const dataLarge = getData(transactions, 6)

    transactions.forEach(transaction => {
        if (transaction.typeId === 1) {
            positiveAmount += transaction.amount
        } else {
            negativeAmount += transaction.amount
        }
    })

    return (
        <div className='overview'>
            <div className='overview-info'>
                <div className='overview-info-raw'>
                    <div className='overview-chart'>
                        <h3>Income Chart</h3>
                        <Chart data={data} type='income' ></Chart>
                    </div>
                    <div className='overview-chart'>
                        <h3>Expenses Chart</h3>
                        <Chart data={data} type='expenses' ></Chart>
                    </div>
                </div>
                <div className='overview-info-raw'>
                    <div className='overview-card-container'>
                        <Card income={true} amount={roundNumber(positiveAmount)} ></Card>
                    </div>
                    <div className='overview-card-container'>
                        <Card income={false} amount={roundNumber(negativeAmount)} ></Card>
                    </div>
                </div>
                <div className='overview-info-raw'>
                    <div className='overview-chart-large'>
                        <h3>General</h3>
                        <Chart data={dataLarge} type='all'></Chart>
                    </div>
                </div>
            </div>
            <div className='overview-history'>
                <h3>User</h3>
                <Profile></Profile>
                <h3>Transactions</h3>
                <Activity transactions={transactions} ></Activity>
            </div>
        </div>
    )
}

export default Overview