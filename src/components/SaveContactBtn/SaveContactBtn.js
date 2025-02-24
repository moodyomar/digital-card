import React, { useState } from 'react';
import Modal from 'react-modal';
import SvcForm from '../SvcForm/ArSvcForm'
import addIcon from '../../add-icon.svg'
import { ServiceModal } from '../ServiceModal/ServiceModal';

const SaveContactBtn = ({ bizDetails }) => {
        const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
        const openCalendarModal = () => {
            setIsCalendarModalOpen(true);
        };
        const closeCalendarModal = () => {
            setIsCalendarModalOpen(false);
        };

    const [isSvcModalOpen, setIsSvcModalOpen] = useState(false);
    const openSvcModal = () => {
        // setIsSvcModalOpen(true);
        openCalendarModal()
    };
    const closeSvcModal = () => {
        setIsSvcModalOpen(false);
    };

    const saveContact = () => {
        // Get the contact information from the website
        let contact = {
            name: "QB Media",
            phone: "0529921100",
            email: "info@qbmedia.co.il",
            website: "https://qbmedia.co.il",
        };
        // create a vcard file
        let vcard = "BEGIN:VCARD\nVERSION:4.0\nFN:" + contact.name + "\nTEL;TYPE=work,voice:" + contact.phone + "\nEMAIL:" + contact.email + "\nURL:" + contact.website + "\nEND:VCARD";

        let blob = new Blob([vcard], { type: "text/vcard" });
        let url = URL.createObjectURL(blob);

        const newLink = document.createElement('a');
        newLink.download = contact.name + ".vcf";
        newLink.textContent = contact.name;
        newLink.href = url;

        newLink.click();
    }

    return (
        <>
            <div onClick={saveContact} className="btn" >{bizDetails.saveBtnText} <img src={addIcon} alt="Add QB Media Contact" /></div>
            <div onClick={() => openSvcModal()} className="btn svc-btn" >{bizDetails.orderNowText}</div>
            <ServiceModal closeCalendarModal={closeCalendarModal} isCalendarModalOpen={isCalendarModalOpen}/>
            <Modal isOpen={isSvcModalOpen} onRequestClose={closeSvcModal} className="modal svc-modal" overlayClassName="overlay">
                <SvcForm />
            </Modal>
        </>

    )
}

export default SaveContactBtn