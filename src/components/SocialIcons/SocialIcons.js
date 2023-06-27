import React, { useState } from 'react';
import './SocialIcons.css'
import callIcon from './phone-icon.svg'
import wspIcon from './whatsapp-icon.svg'
import igIcon from './instagram-icon.svg'
import fbIcon from './facebook-icon.svg'
import mail from './mail-icon.svg'
import website from './web-icon.svg'
import calendar from './calendar-icon.svg'
import Modal from 'react-modal';
// import Calendar from '../Calendar/Calendar'


const icons = [
    { "action": "Call", "svg": callIcon, "text": "اتصل" },
    { "action": "Wsp", "svg": wspIcon, "text": "واتساب" },
    { "action": "IG", "svg": igIcon, "text": "انستاغرام" },
    { "action": "FB", "svg": fbIcon, "text": "فيسبوك" },
    { "action": "Mail", "svg": mail, "text": "أميل" },
    { "action": "Website", "svg": website, "text": "موقع" },
    { "action": "calendar", "svg": calendar, "text": "موعد" },
]

const SocialIcons = () => {
    const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
    const openCalendarModal = () => {
        setIsCalendarModalOpen(true);
    };
    const closeCalendarModal = () => {
        setIsCalendarModalOpen(false);
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
                window.open('https://instagram.com/qbmedia.co.il')
                break;
            case "FB":
                window.open('https://facebook.com/qbmedia.co.il')
                break;
            case "Mail":
                window.location.href = 'mailto:info@qbmedia.co.il'
                break;
            case "Website":
                window.open('https://qbmedia.co.il')
                break;
            case "calendar":
                openCalendarModal();
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
            <Modal isOpen={isCalendarModalOpen} onRequestClose={closeCalendarModal} className="modal" overlayClassName="overlay">
                <div className="modal-content">
                    <h2>تعيين موعد اونلاين</h2>
                    {/* <Calendar /> */}
                    <iframe src="https://qbmedia.setmore.com/" title="Schedule Appointment" scrolling="yes" width="100%" height="500" frameborder="0"></iframe>
                    {/* <button className="close-button" onClick={closeCalendarModal}>X</button> */}
                </div>
            </Modal>
        </div>

    )
}

export default SocialIcons