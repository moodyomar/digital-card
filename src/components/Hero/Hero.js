import React from 'react';
import './Hero.css'


const Hero = ({bizDetails}) => {

    return (

        <div className='Hero'>
            <div className="cover">
                <div className="profile"></div>
            </div>
            <h1 style={{ marginTop: '75px' }}>{bizDetails.name}</h1>
            <p>{bizDetails.description}</p>
        </div>

    )
}

export default Hero