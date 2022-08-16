import React, { useState } from 'react'
import { ReactComponent as IconAdd } from '../../assets/icons/add.svg'
import Modal from '../Modal/Modal'
import { TransactionCreate } from '../TransactionUpdate/TransactionUpdate'
import './index.css'

const Menu = ({ handleCreateTransaction, handleGetTransactions, handleGetCategories, types, categories }) => {
    
    const [showModal, setShowModal] = useState(false)
    
    const handleOpenModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <div className='transactions-page-menu' >
            <button onClick={handleOpenModal} >New Operation <IconAdd className='icon-menu'></IconAdd></button>

            <div className='filter-container'>
                <label>
                    Filter by type: 
                </label>
                <select name='type' id='type-select'
                    defaultValue='all'
                    onChange={e => {
                        handleGetCategories(e.target.value)
                        handleGetTransactions(e.target.value, 'type')
                    } }>
                    <option value='all'>All</option>
                    {
                        types.map(type => {
                            return (<option key={type.id} value={type.id}>
                                {type.name}
                            </option>)
                        })
                    }
                </select>
            </div>

            <div className='filter-container'>
                <label>
                    Filter by category: 
                </label>
                <select name='category' id='category-select' onChange={
                    e => handleGetTransactions(e.target.value, 'category')
                }>
                    {
                        categories.map(cat => {
                            return (<option key={cat.id} value={cat.id}>
                                {cat.name}
                            </option>)
                        })
                    }
                </select>
            </div>

            {showModal && <Modal><TransactionCreate
                onClose={handleCloseModal}
                handleCreateTransaction={handleCreateTransaction}
            ></TransactionCreate></Modal>}
    </div>)
}

export default Menu