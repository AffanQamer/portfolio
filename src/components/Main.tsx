import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import myPhoto from '../assets/images/myPic.png';
function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={myPhoto} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/AffanQamer" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/affan-qamar-53b68a2a8/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Affan Qamar</h1>
          <p>Aspiring Data Scientist</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/AffanQamer" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/affan-qamar-53b68a2a8/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;