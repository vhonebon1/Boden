import React from 'react'

const Modal = ({ hideModal, children }) =>
  <div className='modal-wrapper'>
    <div className="modal-escape" onClick={hideModal}>X</div>
    {children}
  </div>

export default Modal
