import React from 'react'
import { ReactComponent as IconCheck } from '../../assets/icons/check.svg'
import { ReactComponent as XIcon } from '../../assets/icons/xicon.svg'
import roundNumber from '../../helpers/roundNumber'
import './index.css'

const Item = ({ income, concept, date, amount }) => {
    return (
        <div className='activity-item' >
            <div className='icon-container'>
                <div className={`circle-div ${income ? '' : 'expense'}`}>
                    {
                        income
                            ? <IconCheck className='icon-item'></IconCheck>
                            : <XIcon className='icon-item'></XIcon>
                    }
                    
                </div>
            </div>
            <div className='info-container'>
                <p className='item-concept' >{concept}</p>
                <p className='item-date'>{date}</p>
            </div>
            <div className='amount-container'>
                <p className={`item-amount ${income ? '':'expense'}`}>${roundNumber(amount)}</p>
                <p className='item-exchange'>USD</p>
            </div>
        </div>
    )
}

export default Item