import React from 'react'
import IosClose from 'react-ionicons/lib/IosClose'

const Modal = ({ hideModal, children }) =>
  <React.Fragment>
    <div className='overlay'></div>
    <div className="modal-content">
      <div className='close-wrap' onClick={() => hideModal()}>
        <IosClose fontSize="30px" color="#fff" />
        {children}
      </div>
    </div>
  </React.Fragment>

export default Modal
