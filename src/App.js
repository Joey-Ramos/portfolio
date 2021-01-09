import './App.css';
import profile from './Assets/Images/profile.jpg';
import emailIcon from './Assets/Icons/emailicon2.png';
import linkedinIcon from './Assets/Icons/linkedinicon2.png';
import githubIcon from './Assets/Icons/githubicon4.png';

function App() {
  return (
    <div className="header">
      <div className="profile-image">
        <img className="profile-pic" src={profile} alt="Avatar" width="100px" height="100px" />
      </div>
      <div className="name">
        <h4>Joey Ramos</h4>
      </div>
      <div className="icons">
        <a href="mailto:jramos1202@gmail.com" className="logo">
          <img src={emailIcon} alt="Logo" />
        </a>
        <a href="https://www.linkedin.com/in/joseph-ramos-8630031aa/" className="logo">
          <img src={linkedinIcon} alt="Logo" />
        </a>
        <a href="https://github.com/Joey-Ramos" className="logo">
          <img src={githubIcon} alt="Logo" />
        </a>
      </div>
    </div>
    
   
  );
}

export default App;
