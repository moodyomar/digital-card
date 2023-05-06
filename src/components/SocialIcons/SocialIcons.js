import './SocialIcons.css'
import callIcon from './phone-icon.svg'
import wspIcon from './whatsapp-icon.svg'
import igIcon from './instagram-icon.svg'
import fbIcon from './facebook-icon.svg'
import mail from './mail-icon.svg'
import website from './web-icon.svg'

const handleClick = (e) => {
    console.log(e);
}

const icons = [
    { "action": "Call", "svg": callIcon, "text":"اتصل" },
    { "action": "Wsp", "svg": wspIcon, "text":"واتساب" },
    { "action": "IG", "svg": igIcon, "text":"انستاغرام" },
    { "action": "FB", "svg": fbIcon, "text":"فيسبوك" },
    { "action": "Mail", "svg": mail, "text":"أميل" },
    { "action": "Website", "svg": website, "text":"موقع" },
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