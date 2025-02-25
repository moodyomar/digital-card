import React from 'react'
import Modal from 'react-modal';

export const ServiceModal = ({closeCalendarModal,isCalendarModalOpen}) => {



    return (
        <Modal isOpen={isCalendarModalOpen} onRequestClose={closeCalendarModal} className="modal" overlayClassName="overlay">
            <div className="modal-content">
                {/* <h2>تعيين موعد اونلاين</h2> */}
                <iframe src="https://qbmedia.setmore.com/" title="Schedule Appointment" scrolling="yes" width="100%" height="900" frameborder="0"></iframe>
                {/* <button className="close-button" onClick={closeCalendarModal}>X</button> */}
            </div>
        </Modal>
    )
}
