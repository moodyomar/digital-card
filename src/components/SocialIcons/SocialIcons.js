import React, { useState } from 'react';
import './SocialIcons.css'
import callIcon from './phone-icon.svg'
import wspIcon from './whatsapp-icon.svg'
import igIcon from './instagram-icon.svg'
import fbIcon from './facebook-icon.svg'
import mail from './mail-icon.svg'
import website from './web-icon.svg'
import review from './review.svg'
import calendar from './calendar-icon.svg'
import Modal from 'react-modal';
import FeedbackForm from '../Feedback/Feedback';
// import Calendar from '../Calendar/Calendar'


const SocialIcons = ({bizDetails, onCalendarClick}) => {
    const icons = [
        { "action": "Call", "svg": callIcon, "text": bizDetails.socialBtns.call },
        { "action": "Wsp", "svg": wspIcon, "text": bizDetails.socialBtns.wsp },
        { "action": "IG", "svg": igIcon, "text": bizDetails.socialBtns.ig },
        { "action": "FB", "svg": fbIcon, "text": bizDetails.socialBtns.fb },
        { "action": "calendar", "svg": calendar, "text": bizDetails.socialBtns.meeting },
        { "action": "Website", "svg": website, "text": bizDetails.socialBtns.website },
        { "action": "Mail", "svg": mail, "text": bizDetails.socialBtns.mail },
        { "action": "reviewus", "svg": review, "text": bizDetails.socialBtns.review },
    ]

    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
    const openReviewModal = () => {
        setIsReviewModalOpen(true);
    };
    const closeReviewModal = () => {
        setIsReviewModalOpen(false);
    };

    const handleClick = (action) => {
        switch (action) {
            case "Call":
                window.location.href = 'tel:0529921100'
                break;
            case "Wsp":
                window.open('https://wa.link/i0s73b')
                break;
            case "IG":
                window.open('https://instagram.com/qbmedia.co')
                break;
            case "FB":
                window.open('https://facebook.com/qbmedia.co')
                break;
            case "Mail":
                window.location.href = 'mailto:info@qbmedia.co.il'
                break;
            case "Website":
                window.open('https://qbmedia.co.il')
                break;
            case "reviewus":
                openReviewModal();
                break;
            case "calendar":
                onCalendarClick();
                break;
            default:
                console.log("Invalid action");
        }
    };
    
    return (
        <div className="SocialIcons">
            {icons.map((icon) => (
                <div key={icon.action} onClick={() => handleClick(icon.action)} className="socialIcon">
                    <img src={icon.svg} alt={icon.action} />
                    <span>{icon.text}</span>
                </div>
            ))}

            <Modal isOpen={isReviewModalOpen} onRequestClose={closeReviewModal} className="modal feedback" overlayClassName="overlay">
                <div className="modal-content">
                    <h2>قييمنا بناء على تعاملك معنا</h2>
                    <FeedbackForm/>
                </div>
            </Modal>
        </div>

    )
}

export default SocialIcons