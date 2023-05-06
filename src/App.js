import './App.css';
import Hero from './components/Hero/Hero';
import SocialIcons from './components/SocialIcons/SocialIcons';
import addIcon from './add-icon.svg'


function App() {
  return (
    <div className="App">
      <Hero />
      <h1 style={{ marginTop: '75px' }}>QB Media | كيوبي ميديا</h1>
      <p>تطوير مصالح تجاريه لعالم الديجيتال</p>
      <SocialIcons />
      <div className="btn">ضيفني لجهات الاتصال <img src={addIcon} alt="Add QB Media Contact" /></div>
      <div className='Footer' style={footerStyle}>
        <small>برمجه وتصميم <a href="https://qbmedia.co.il" target="_blank" rel="noreferrer" style={footerStyle.a}>كيوبي ميديا</a></small>
      </div>
    </div>
  );
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
      color:"#E97120",
      pointer:"cursor"
  }
}

export default App;
