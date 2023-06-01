import React, { useState } from 'react';
import "./SvcForm.css"

const SvcForm = ({ font }) => {
    const logo = 'logo-light.svg'
    const [selectedOption, setSelectedOption] = useState('');
    const [postSlectedOption, setPostSlectedOption] = useState('');
    const [webSlectedOption, setWebSlectedOption] = useState('');
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
    const handleAvailableLogoSlectedOption = (event) => {
        const option = event.target.value;
        setAvailableLogoSlectedOption(option);
        setShowFields(option !== '');
    };


    // Logo Design
    const [businessName, setBusinessName] = useState('');
    const [businessSlogan, setBusinessSlogan] = useState('');
    const [businessDescription, setBusinessDescription] = useState('');
    const [specialRequests, setSpecialRequests] = useState('');
    const [logoFiles, setLogoFiles] = useState([]);

    const handleBusinessNameChange = (event) => {
        setBusinessName(event.target.value);
    };

    const handleBusinessSloganChange = (event) => {
        setBusinessSlogan(event.target.value);
    };

    const handleBusinessDescriptionChange = (event) => {
        setBusinessDescription(event.target.value);
    };

    const handleSpecialRequestsChange = (event) => {
        setSpecialRequests(event.target.value);
    };

    const handleLogoUpload = (event) => {
        const files = event.target.files;
        setLogoFiles([...logoFiles, ...files]);
    };
    const logoForm = <div>
        <div>
            <label>
                أسم المصلحه:
                <small><strong>مثلا:</strong> كيوبي ميديا</small>
                <input placeholder='اكتب/ي اسم مصلحتك هنا' type="text" name="businessName" value={businessName} onChange={handleBusinessNameChange} />
            </label>
        </div>
        <div>
            <label>
                جمله تصف المصلحه:
                <small><strong>مثلا:</strong> تطوير مصالح تجاريه</small>
                <input type="text" name="businessSlogan" value={businessSlogan} onChange={handleBusinessSloganChange} />
            </label>
        </div>
        <div>
            <label>
                شرح عن المصلحه وخدماتها:
                <small>مجال عمل المصلحه، ميزاتها، زبائنها، خدماتها والخ...</small>
                <textarea name='businessDescription' placeholder='متجر اونلاين لبيع احذيه رياضيه' value={businessDescription} onChange={handleBusinessDescriptionChange} />
            </label>
        </div>
        <div>
            <label>
                طلبات معينه للشعار:
                <small><strong>مثلا:</strong> شعار دائري، الوان، شعار كلمه من دون اشكال والخ...</small>
                <textarea name='specialRequests' value={specialRequests} onChange={handleSpecialRequestsChange} />
            </label>
        </div>
        <div>
            <label>
                شعارات احببتها:
                <small>شعار اعجبك لمصلحه مشابهه او حتى مصلحه مختلفه</small>
                <input name='likedlogos' type="file" multiple onChange={handleLogoUpload} />
            </label>
        </div>
    </div>

    return (
        <div className={`SvcForm ${font}`} style={{ fontFamily: font }} >
            <form data-aos="zoom-in" data-aos-duration="1500" name="svc-form" method="POST" action="/form" data-netlify="true" netlify encType="multipart/form-data">
                <input type="hidden" name="form-name" value="svc-form" />
                <div style={{ textAlign: 'center', marginBottom: '20px' }}><img width={120} src={`https://qbmedia.b-cdn.net/qbmedia/${logo}`} alt="QB Media" className="logo"
                    data-aos="slide-down" data-aos-duration="1500" /></div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                        ما الخدمة التي تحتاجها؟
                    </label>
                    <select name='selectedOption'
                        value={selectedOption}
                        onChange={handleOptionChange} style={{ marginBottom: '10px' }}>
                        <option value="">اختر الخدمة المرغوبة</option>
                        <option value="Post/Story Design">تصميم منشور/ستوري</option>
                        <option value="Logo Design">تصميم شعار</option>
                        <option value="Website Development">بناء موقع</option>
                        <option value="Food Menu">قائمة طعام (منيو)</option>
                    </select>
                </div>


                {selectedOption === 'Logo Design' && showFields && (
                    logoForm
                )}


                {selectedOption === 'Website Development' && showFields && (
                    <div>
                        <div>
                            <label>
                                اسم المصلحه:
                                <input name="webbusinessName" placeholder='اكتب/ي اسم مصلحتك هنا' type="text" value={businessName} onChange={handleBusinessNameChange} />
                            </label>
                        </div>
                        <div>
                            <label>
                                مجال عمل المصلحه:
                                <small>سياحه، اكسسوارات، مطعم والخ....</small>
                                <textarea name='webbusinessDescription' value={businessDescription} onChange={handleBusinessDescriptionChange} />
                            </label>
                        </div>
                        <div>
                            <label>
                                نوع الموقع المطلوب:
                                <select name='webSlectedOption'
                                    value={webSlectedOption}
                                    onChange={handleWebOptionChange} style={{ marginBottom: '10px' }}>
                                    <option value="online store">موقع مبيعات (يشمل متجر اونلاين)</option>
                                    <option value="services website">موقع خدمات (لا يشمل متجر اونلاين)</option>
                                    <option value="landing page">صفحه هبوط</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <label>
                                هل متوفر شعار للمصلحه؟:
                                <select name='availableLogoSlectedOption'
                                    value={availableLogoSlectedOption}
                                    onChange={handleAvailableLogoSlectedOption} style={{ marginBottom: '10px' }}>
                                    <option value="yes">نعم</option>
                                    <option value="no">لا، اريد ان تصممو لي شعار</option>
                                </select>
                            </label>
                        </div>
                        {availableLogoSlectedOption === 'yes' &&
                            <div>
                                <label>
                                    شعار المصلحه:
                                    <input name='weblikedlogos' type="file" multiple onChange={handleLogoUpload} />
                                </label>
                            </div>
                        }
                        {availableLogoSlectedOption === 'no' &&
                            logoForm
                        }
                    </div>
                )
                }

                {
                    selectedOption === 'Post/Story Design' && showFields && (
                        <div>
                            <div>
                                <label>
                                    فكره التصميم:
                                    <small>تسويق عام للمصلحه، تخفيض، تهنئه بمناسبه حدث معين، عرض منتج، والخ... </small>
                                    <input name='postbusinessName' type="text" value={businessName} onChange={handleBusinessNameChange} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    الرجاء اختيار التصميم المرغوب به:
                                    <select
                                    name='postSlectedOption'
                                        value={postSlectedOption}
                                        onChange={handlePostOptionChange} style={{ marginBottom: '10px' }}>
                                        <option value="">اختر نوع التصميم</option>
                                        <option value="post design">تصميم منشور</option>
                                        <option value="story design">تصميم ستوري</option>
                                        <option value="post and story design">تصميم منشور + ستوري</option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <label>
                                    محتوى التصميم:
                                    <small>مثلا في حال كانت فكره التصميم عرض منتجات، اكتب هنا المنتجات مع اسعارهن، في حال وجود تخفيض رجاء كتابه الاسعار قبل وبعد والخ...</small>
                                    <textarea name='postbusinessDescription' value={businessDescription} onChange={handleBusinessDescriptionChange} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    شعار المصلحه:
                                    <input name='postlikedlogos' type="file" multiple onChange={handleLogoUpload} />
                                </label>
                            </div>
                        </div>
                    )
                }
                {
                    selectedOption === 'Food Menu' && showFields && (
                        <div>
                            <div>
                                <label>
                                    هل متوفر شعار للمصلحه؟:
                                    <select name='menuavailableLogoSlectedOption'
                                        value={availableLogoSlectedOption}
                                        onChange={handleAvailableLogoSlectedOption} style={{ marginBottom: '10px' }}>
                                        <option value="yes">نعم</option>
                                        <option value="no">لا، اريد ان تصممو لي شعار</option>
                                    </select>
                                </label>
                            </div>
                            {availableLogoSlectedOption === 'yes' &&
                                <div>
                                    <label>
                                        شعار المصلحه:
                                        <input name='menulikedlogos' type="file" multiple onChange={handleLogoUpload} />
                                    </label>
                                </div>
                            }
                            {availableLogoSlectedOption === 'no' &&
                                logoForm
                            }
                        </div>
                    )
                }

                {/* Render additional options similarly */}
                <div style={{ textAlign: 'center' }}>
                    <button type="submit">اطلب الخدمه</button>
                </div>
            </form >
        </div >
    );
};

export default SvcForm;
