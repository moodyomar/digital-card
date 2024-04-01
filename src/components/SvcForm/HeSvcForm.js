import React, { useState } from 'react';
import { endpoint } from '../../utils/endpoint'
import "./SvcForm.css"

const SvcForm = ({ font }) => {
    const logo = 'logo-dark.svg'
    const [selectedOption, setSelectedOption] = useState('');
    const [postSlectedOption, setPostSlectedOption] = useState('');
    const [webSlectedOption, setWebSlectedOption] = useState('');
    const [productsAmount, setProductsAmount] = useState('');
    const [availableLogoSlectedOption, setAvailableLogoSlectedOption] = useState('yes');
    const [showFields, setShowFields] = useState(false);

    const handleOptionChange = (event) => {
        const option = event.target.value;
        setSelectedOption(option);
        setShowFields(option !== '');
    };

    const handlePostOptionChange = (event) => {
        const option = event.target.value;
        setPostSlectedOption(option);
        setShowFields(option !== '');
    };
    const handleWebOptionChange = (event) => {
        const option = event.target.value;
        setWebSlectedOption(option);
        setShowFields(option !== '');
    };
    const handleProductsOptionChange = (event) => {
        const option = event.target.value;
        setProductsAmount(option);
        setShowFields(option !== '');
    };
    const handleAvailableLogoSlectedOption = (event) => {
        const option = event.target.value;
        setAvailableLogoSlectedOption(option);
        setShowFields(option !== '');
    };


    // Logo Design
    const [businessName, setBusinessName] = useState('');
    const [businessSlogan, setBusinessSlogan] = useState('');
    const [logoType, setLogoType] = useState('');
    const [businessDescription, setBusinessDescription] = useState('');
    const [businessId, setBusinessId] = useState('');
    const [specialRequests, setSpecialRequests] = useState('');
    const [logoFiles, setLogoFiles] = useState([]);

    const handleBusinessNameChange = (event) => {
        setBusinessName(event.target.value);
    };

    const handleBusinessSloganChange = (event) => {
        setBusinessSlogan(event.target.value);
    };
    const handleLogoType = (event) => {
        setLogoType(event.target.value);
        console.log(logoType);
    };

    const handleBusinessDescriptionChange = (event) => {
        setBusinessDescription(event.target.value);
    };
    const handleBusinessIdChange = (event) => {
        setBusinessId(event.target.value);
    };

    const handleSpecialRequestsChange = (event) => {
        setSpecialRequests(event.target.value);
    };

    const handleLogoUpload = (event) => {
        const files = event.target.files;
        setLogoFiles([...logoFiles, ...files]);
    };

    const logoForm = <div>
        <div className='question'>
            <label>
                איך קוראים לעסק שלכם?:
                <small><strong>לדוגמה:</strong> קיובי מדיה</small>
                <input placeholder='כתוב שם העסק שלך כאן' type="text" name="businessName" value={businessName} onChange={handleBusinessNameChange} />
            </label>
        </div>
        <div className='question'>
            <label>
                משפט קצר שמתאר את העסק:
                <small><strong>לדוגמה:</strong> קידום עסקים באינטרנט</small>
                <input placeholder='כתוב תיאור על העסק שלך כאן' type="text" name="businessSlogan" value={businessSlogan} onChange={handleBusinessSloganChange} />
            </label>
        </div>
        <div className='question'>
            <label>
                איך תרצה הצורה של הלוגו?:
                <small>חשוב מאוד כדי להגיע לתוצאה הרצויה</small>
                <div className="row">
                    <p htmlFor="textLogo" className='radio-option'>לוגו כתוב</p>
                    <input type="radio" name="logoType" value="logoType" onChange={handleLogoType} />
                </div>
                <div className="row">
                    <p htmlFor="iconLogo" className='radio-option'>לוגו אייקון "סמל"</p>
                    <input type="radio" name="logoType" value="iconLogo" onChange={handleLogoType} />
                </div>
                <div className="row">
                    <p htmlFor="letterLogoWithIcon" className='radio-option'>לוגו אוט או מילה עם אייקון</p>
                    <input type="radio" name="logoType" value="letterLogoWithIcon" onChange={handleLogoType} />
                </div>
            </label>
        </div>
        <div className='question'>
            <label>
                תיאור על העסק והשירותים שלו:
                <small>פעילות העסקת, היתרונות שלו, הלקוחות שלו, השירותים שלו וכו......</small>
                <textarea name='businessDescription' placeholder='חנות אונליין למכירת נעליים' value={businessDescription} onChange={handleBusinessDescriptionChange} style={{ height: '70px' }} />
            </label>
        </div>
        <div className='question'>
            <label>
                בקשות מיוחדות ללוגו:
                <small><strong>לדוגמה:</strong> כאן מבקשים צבעים מיוחדים, צורה מסויימת או כל דבר אחר שיסייע לתהליך</small>
                <textarea name='specialRequests' value={specialRequests} onChange={handleSpecialRequestsChange} style={{ height: '70px' }} />
            </label>
        </div>
        <div className='question'>
            <label>
                לוגו של עסק/ים אחר/ים שאהבת:
                <small>לוגו שאהבת לעסק דומה או אפילו עסק בנישה אחרת</small>
                <input name='likedlogos' type="file" multiple onChange={handleLogoUpload} />
            </label>
        </div>
    </div>
    const newBusinessForm = <div>
        <div className='question'>
            <label>
                איך קוראים לעסק שלכם?:
                <small><strong>לדוגמה:</strong> קיובי מדיה</small>
                <input placeholder='כתוב שם העסק שלך כאן' type="text" name="businessName" value={businessName} onChange={handleBusinessNameChange} />
            </label>
        </div>
        <div className='question'>
            <label>
                תיאור קצר על העסק שלכם:
                <small><strong>לדוגמה:</strong> קידום עסקים באינטרנט</small>
                <input placeholder='כתוב תיאור על העסק שלך כאן במשפט' type="text" name="businessSlogan" value={businessSlogan} onChange={handleBusinessSloganChange} />
            </label>
        </div>
        <div className='question'>
            <label>
                מספר מזהה העסק:
                <small>ת.ז./ע.מ./ח.פ.</small>
                <input inputmode="numeric" name='businessId' type="text" value={businessId} onChange={handleBusinessIdChange} />
            </label>
        </div>
        <div className='question'>
            <label>
                תיאור קצר על העסק שלכם:
                <small>פעילות העסקת, היתרונות שלו, הלקוחות שלו, השירותים שלו וכו......</small>
                <textarea name='businessDescription' placeholder='חנות אונליין למכירת נעליים' value={businessDescription} onChange={handleBusinessDescriptionChange} style={{ height: '70px' }} />
            </label>
        </div>
        <div className='question'>
            <label>
                האם קיים כבר לוגו לעסק?:
                <select name='availableLogoSlectedOption'
                    value={availableLogoSlectedOption}
                    onChange={handleAvailableLogoSlectedOption} style={{ marginBottom: '10px' }}>
                    <option value="yes">כן</option>
                    <option value="no">לא, אני רוצה שתעצבו לי לוגו</option>
                </select>
            </label>
        </div>
        {availableLogoSlectedOption === 'yes' &&
            <div className='question'>
                <label>
                    לוגו העסק:
                    <input name='newlikedlogos' type="file" multiple onChange={handleLogoUpload} />
                </label>
            </div>
        }
        {availableLogoSlectedOption === 'no' &&
            logoForm
        }
    </div>
    const websiteForm = <div>
        <div className='question'>
            <label>
                איך קוראים לעסק שלכם?:
                <small><strong>לדוגמה:</strong> קיובי מדיה</small>
                <input placeholder='כתוב שם העסק שלך כאן' type="text" name="webBusinessName" value={businessName} onChange={handleBusinessNameChange} />
            </label>
        </div>
        <div className='question'>
            <label>
                תיאור קצר על העסק שלכם:
                <small><strong>לדוגמה:</strong> קידום עסקים באינטרנט</small>
                <input placeholder='כתוב' type="text" name="webBusinessDescription" value={businessDescription} onChange={handleBusinessDescriptionChange} />
            </label>
        </div>
        <div className='question'>
            <label>
                סוג האתר הרצוי:
                <select name='webSlectedOption'
                    value={webSlectedOption}
                    onChange={handleWebOptionChange} style={{ marginBottom: '10px' }}>
                    <option value="">בחר סוג האתר הרצוי</option>
                    <option value="online store">אתר מכירות (מכיל חנות אונליין)</option>
                    <option value="services website">אתר שירותים (לא מכיל חנות אונליין)</option>
                    <option value="landing page">דף נחיתה</option>
                </select>
            </label>
        </div>
        {webSlectedOption === 'online store' &&
            <div className='question'>
                <label>
                    כמות המוצרים הרצויה בהקמה:
                    <select name='productsAmount'
                        value={productsAmount}
                        onChange={handleProductsOptionChange} style={{ marginBottom: '10px' }}>
                        <option value="up to 50">עד 50 מוצר בהתחלה</option>
                        <option value="up to 100">עד 100 מוצר בהתחלה</option>
                        <option value="up to 250">עד 250 מוצר בהתחלה</option>
                        <option value="up to 500">עד 500 מוצר בהתחלה</option>
                        <option value="more than 500">מעל 500 מוצרים</option>
                    </select>
                </label>
            </div>
        }
        <div className='question'>
            <label>
                האם קיים כבר לוגו לעסק?:
                <select name='availableLogoSlectedOption'
                    value={availableLogoSlectedOption}
                    onChange={handleAvailableLogoSlectedOption} style={{ marginBottom: '10px' }}>
                    <option value="yes">כן</option>
                    <option value="no">לא, אני רוצה שתעצבו לי לוגו</option>
                </select>
            </label>
        </div>
        {availableLogoSlectedOption === 'yes' &&
            <div className='question'>
                <label>
                    לוגו העסק:
                    <input name='weblikedlogos' type="file" multiple onChange={handleLogoUpload} />
                </label>
            </div>
        }
        {availableLogoSlectedOption === 'no' &&
            logoForm
        }
    </div>
    const postForm = <div>
        <div className='question'>
            <label>
                רעיון העיצוב:
                <small>שיווק כללי לעסק, מבצע מסויים, ברכה עבור אירוע, הצגת מוצר/שירות וכו... </small>
                <input name='postbusinessName' type="text" value={businessName} onChange={handleBusinessNameChange} />
            </label>
        </div>
        <div className='question'>
            <label>
                נא לבחור את העיצוב הרצוי:
                <select
                    name='postSlectedOption'
                    value={postSlectedOption}
                    onChange={handlePostOptionChange} style={{ marginBottom: '10px' }}>
                    <option value="">בחר סוג העיצוב</option>
                    <option value="post design">עיצוב פוסט</option>
                    <option value="story design">עיצוב סטורי</option>
                    <option value="post and story design">עיצוב פוסט + סטורי</option>
                </select>
            </label>
        </div>
        <div className='question'>
            <label>
                תוכן העיצוב:
                <small>לדוגמה במידע ורעיון העיצוב הוא להציג מוצרים, רשום כאן את המוצרים עם המחירים שלהם וכל מידע רלוונטי, במידע ויש הנחה נא לדאוג לרשום את המחירים לפני ואחרי...</small>
                <textarea name='postbusinessDescription' value={businessDescription} onChange={handleBusinessDescriptionChange} style={{ height: '70px' }} />
            </label>
        </div>
        <div className='question'>
            <label>
                לוגו העסק:
                <input name='postlikedlogos' type="file" multiple onChange={handleLogoUpload} />
            </label>
        </div>
    </div>
    const foodForm = <div>
        <div className='question'>
            <label>
                האם קיים כבר לוגו לעסק?:
                <select name='availableLogoSlectedOption'
                    value={availableLogoSlectedOption}
                    onChange={handleAvailableLogoSlectedOption} style={{ marginBottom: '10px' }}>
                    <option value="yes">כן</option>
                    <option value="no">לא, אני רוצה שתעצבו לי לוגו</option>
                </select>
            </label>
        </div>
        {availableLogoSlectedOption === 'yes' &&
            <div className='question'>
                <label>
                    לוגו העסק:
                    <input name='menulikedlogos' type="file" multiple onChange={handleLogoUpload} />
                </label>
            </div>
        }
        {availableLogoSlectedOption === 'no' &&
            logoForm
        }
    </div>


    return (
        <div className={`SvcForm he`} >
            <form data-aos="zoom-in" data-aos-duration="1500" name="svc-form" method="POST" action="/form" data-netlify="true" netlify encType="multipart/form-data">
                <input type="hidden" name="form-name" value="svc-form" />
                <div style={{ textAlign: 'center', marginBottom: '20px' }}><img src={`${endpoint}${logo}`} alt="QB Media" className="logo"
                    data-aos="slide-down" data-aos-duration="1500" /></div>
                <div style={{ display: 'flex', flexDirection: 'column' }} className='question'>
                    <label style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                        מה השירות שאתם צריכים?
                    </label>
                    <select name='selectedOption'
                        value={selectedOption}
                        onChange={handleOptionChange} style={{ marginBottom: '10px' }}>
                        <option value="">נא לבחור בשירות הרצוי</option>
                        <option value="New Business">עסק חדש</option>
                        <option value="Post/Story Design">עיצוב פוסט/סטורי</option>
                        <option value="Logo Design">עיצוב לוגו</option>
                        <option value="Website Development">בניית אתר</option>
                        <option value="Food Menu">תפריט אוכל (מניו)</option>
                        <option value="Mobile Application">אפליקציית מובייל</option>
                        <option value="Motion Graphic Video">סרטון מושן גרפיקס</option>
                    </select>
                </div>


                {selectedOption === 'New Business' && showFields && (
                    newBusinessForm
                )}

                {selectedOption === 'Logo Design' && showFields && (
                    logoForm
                )}

                {selectedOption === 'Website Development' && showFields && (
                    websiteForm
                )
                }

                {
                    selectedOption === 'Post/Story Design' && showFields && (
                        postForm
                    )
                }
                {
                    selectedOption === 'Food Menu' && showFields && (
                        foodForm
                    )
                }

                {/* Render additional options similarly */}
                <div style={{ textAlign: 'center' }}>
                    <button type="submit">הזמן שירות</button>
                </div>
            </form >
        </div >
    );
};

export default SvcForm;
