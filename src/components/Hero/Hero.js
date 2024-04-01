import React from 'react';
import './Hero.css'
import { business } from '../../utils/config';


const Hero = () => {

    return (

        <div className='Hero'>
            <div className="cover">
                <div className="profile"></div>
            </div>
            <h1 style={{ marginTop: '75px' }}>{business.name}</h1>
            <p>{business.description}</p>
        </div>

    )
}

export default Hero