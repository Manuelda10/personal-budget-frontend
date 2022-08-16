import React from 'react'
import './Sidebar.css'

const Balance = ({total}) => {
    return (
        <div className='balance'>
            <h1>${total}</h1>
            <p>Current balance</p>
        </div>
    )
}

export default Balance