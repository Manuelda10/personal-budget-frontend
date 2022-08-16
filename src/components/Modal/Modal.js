import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Modal({ children }) {
    return (
        <div className='modal'>
            <div className='modal-content'>
                {children}
            </div>
        </div>
    )
}

export default function ModalPortal({ children}) {
    return ReactDOM.createPortal(
        <Modal>{children}</Modal>
        , document.getElementById('modal-root')
    )
}