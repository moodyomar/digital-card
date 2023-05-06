import React from 'react';
import './SocialIcons.css'
import callIcon from './phone-icon.svg'
import wspIcon from './whatsapp-icon.svg'
import igIcon from './instagram-icon.svg'
import fbIcon from './facebook-icon.svg'
import mail from './mail-icon.svg'
import website from './web-icon.svg'

const handleClick = (action) => {
    switch (action) {
        case "Call":
            window.location.href = 'tel:0525511812'
            break;
        case "Wsp":
            window.open('https://wa.link/knryfz')
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
        default:
            console.log("Invalid action");
    }
};


const icons = [
    { "action": "Call", "svg": callIcon, "text": "اتصل" },
    { "action": "Wsp", "svg": wspIcon, "text": "واتساب" },
    { "action": "IG", "svg": igIcon, "text": "انستاغرام" },
    { "action": "FB", "svg": fbIcon, "text": "فيسبوك" },
    { "action": "Mail", "svg": mail, "text": "أميل" },
    { "action": "Website", "svg": website, "text": "موقع" },
]

const SocialIcons = () => {

    return (
        <div className='SocialIcons'>
            {icons.map(icon => (
                <div key={icon.action} onClick={e => handleClick(e.target.alt)} className="socialIcon">
                    <img src={icon.svg} alt={icon.action} />
                    <span>{icon.text}</span>
                </div>
            ))}
        </div>

    )
}

export default SocialIcons