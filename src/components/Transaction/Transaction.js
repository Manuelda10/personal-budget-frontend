import React, { useEffect, useState } from 'react'
import Modal from '../Modal/Modal'
import { TransactionUpdate } from '../TransactionUpdate/TransactionUpdate'
import getOneCategory from '../../services/category/getOneCategory'
import { ReactComponent as IconEdit } from '../../assets/icons/update.svg'
import { ReactComponent as IconDelete } from '../../assets/icons/delete.svg'
import roundNumber from '../../helpers/roundNumber'
import Swal from 'sweetalert2'
import './index.css'

const Transaction = ({ id, concept, amount, date, categoryId, typeId, handleUpdateTransaction, handleDeleteTransaction}) => {

    const [showModal, setShowModal] = useState(false);
    const [category, setCategory] = useState('')

    const handleOpenModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    const handleGetCategory = (id) => {
        getOneCategory(id).then(cat => setCategory(cat.name))
    }

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You won't be able to retrieve the transaction '${concept}'`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                handleDeleteTransaction(id)
                Swal.fire(
                    'Deleted!',
                    'The transaction has been deleted.',
                    'success'
                )
            } 
        })
    }

    useEffect(() => {
        handleGetCategory(categoryId)
    }, [categoryId])

    return (<div className='transaction'>
        <div className='transaction-info'>
            <h4>{concept}</h4>
            <p className={`transaction-amount ${typeId === 1 ? 'income' : ''}`} >
                { typeId === 1 ? '+' : '-'
                }{roundNumber(amount)} USD
            </p>
            <p className='transaction-date'>{date}</p>
        </div>

        <div className='transaction-manage'>
            <p className='transaction-category'>{category}</p>
            <div className='transaction-btns-container' >
                <button onClick={handleOpenModal} ><IconEdit className='icon-transaction edit'></IconEdit></button>
                <button onClick={handleDelete} ><IconDelete className='icon-transaction'></IconDelete></button>
            </div>         
        </div>
        {
            showModal
            && <Modal>
                    <TransactionUpdate
                        id={id}
                        initialConcept={concept}
                        initialAmount={amount}
                        initialDate={date}
                        initialTypeId={typeId}
                        initialCategoryId={categoryId}
                        handleUpdateTransaction={handleUpdateTransaction}
                        onClose={handleCloseModal} ></TransactionUpdate>
                </Modal>
        }
    </div>)
}

export default Transaction