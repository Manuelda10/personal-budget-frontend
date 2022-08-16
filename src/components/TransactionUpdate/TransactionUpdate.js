import React, {useEffect, useState} from 'react'
import {ReactComponent as CloseIcon} from '../../assets/icons/xicon.svg'
import getCategoriesByType from '../../services/category/getCategoriesByType'
import getTypes from '../../services/type/getTypes'
import Swal from 'sweetalert2'
import './index.css'

const TransactionUpdate = ({id, initialConcept, initialAmount, initialDate, initialCategoryId, initialTypeId, handleCreateTransaction, handleUpdateTransaction, onClose }) => {
    
    const [concept, setConcept] = useState(initialConcept || '')
    const [amount, setAmount] = useState(initialAmount || '')
    const [date, setDate] = useState(initialDate || '')
    const [categoryId, setCategoryId] = useState(initialCategoryId || 1)
    const [typeId, setTypeId] = useState(initialTypeId || 1)

    //List of categories and types
    const [categories, setCategories] = useState([])
    const [types, setTypes] = useState([])

    const handleGetCategories = (id) => {
        getCategoriesByType(id).then(cat => setCategories(cat))
    }

    const handleTypes = () => {
        getTypes().then(type => setTypes(type))
    }

    // Save the information of the transaction
    const handleSubmit = (e) => {
        e.preventDefault()
        const transactionUpdated = {
            concept,
            amount,
            date,
            categoryId,
            typeId
        }

        if (initialConcept === undefined) {
            handleCreateTransaction(transactionUpdated)
            Swal.fire({
                icon: 'success',
                title: 'The transaction has been created successfully',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            handleUpdateTransaction(id, transactionUpdated)
            Swal.fire({
                icon: 'success',
                title: 'The transaction has been updated successfully',
                showConfirmButton: false,
                timer: 1500
            })
        }
        onClose()
    }

    useEffect(() => {
        handleGetCategories(typeId)
        handleTypes()
    }, [typeId])

    return (
        <div className='transaction-update'>
            <h2>{
                initialConcept === undefined ?
                    'Transaction Create'
                    : 'Transaction Update'
            }</h2>
            <form onSubmit={handleSubmit}>
                <div className='transaction-update-row'>
                <div className='concept-container'>
                    <label>Concept of payment: <br></br>
                        <input className='input-concept'
                            type='text'
                            value={concept}
                            onChange={e => setConcept(e.target.value)}
                            required>
                        </input>
                    </label>
                </div>
            </div>

            <div className='transaction-update-row'>
                <div className='transaction-update-col'>
                    <label>Amount: <br></br> <input
                        className='input-number'
                        type='number'
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                        required >
                    </input></label>
                </div>
                <div className='transaction-update-col'>
                    <label>Date: <br></br><input
                        className='input-date'
                        type='date'
                        value={date}   
                        onChange={e => setDate(e.target.value)}
                        required >
                    </input></label>
                </div>
            </div>

            <div className='transaction-update-row'>
                <div className='transaction-update-col'>
                    <label>Type: </label><br></br>
                    <select
                        disabled={initialConcept === undefined ? false : true}
                        onChange={e => {
                            setTypeId(e.target.value)
                            handleGetCategories(e.target.value)
                        }}
                        value={`${typeId}`}
                    >
                        {
                            types.map(type => {
                                return (
                                    <option key={type.id} value={type.id}>
                                        {type.name}
                                    </option>)
                           }) 
                        }
                    </select>
                </div>

                <div className='transaction-update-col'>
                    <label>Category: </label><br></br>
                    <select
                        onChange={e => setCategoryId(e.target.value)}
                        value={`${categoryId}`}>
                        {
                            categories.map(cat => {
                                return (
                                    <option key={cat.id} value={cat.id}>
                                        {cat.name}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
                <button onSubmit={handleSubmit} className='save-btn'>Save</button>
            </form>
            <button onClick={onClose} className='close-btn'><CloseIcon className='close-icon'></CloseIcon></button>
            
        </div>
    )
}

const TransactionCreate = ({ onClose, handleCreateTransaction }) => {
    return (
        <TransactionUpdate
            onClose={onClose}
            handleCreateTransaction={handleCreateTransaction}
            concept={undefined}>
        </TransactionUpdate>
    )
}

export { TransactionUpdate, TransactionCreate }