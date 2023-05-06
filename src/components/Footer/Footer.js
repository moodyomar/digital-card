import React from 'react'

const Footer = () => {

    return (

        <div className='Footer' style={footerStyle}>
            <small>برمجه وتصميم <a href="https://qbmedia.co.il" target="_blank" rel="noopener noreferrer" style={footerStyle.a}>كيوبي ميديا</a></small>
        </div>

    )
}

const footerStyle = {
    marginTop:"35px",
    width:'100vw',
    fontSize:'18px',
    backgroundColor:"#1E1E20",
    height:"80px",
    color:"white",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    a:{
        textDecoration:"none",
        pointer:"cursor"
    }
  }

export default Footer