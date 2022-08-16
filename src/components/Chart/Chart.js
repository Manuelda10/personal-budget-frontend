import React from 'react'

import {LineChart, CartesianGrid, XAxis, 
    YAxis, Tooltip, Legend, Line, ResponsiveContainer
} from 'recharts'
    
const Chart = ({ data, type }) => {

    return (
            <ResponsiveContainer width={'90%'} height={'80%'}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                {
                    type === 'income'
                    ? <Line type="monotone" dataKey="positive amount" stroke="#20BD13" strokeWidth={2} />
                    : <Line type="monotone" dataKey="negative amount" stroke="#D51010" strokeWidth={2} />
                }
                {
                    type === 'all' && <Line type="monotone" dataKey="positive amount" stroke="#20BD13" strokeWidth={2}/>
                }{
                    type === 'all' && <Line type="monotone" dataKey="net income" stroke="#8884d8" strokeWidth={2}/>
                }
                    
                </LineChart>
            </ResponsiveContainer>
        )
}

export default Chart