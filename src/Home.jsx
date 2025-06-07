import React from 'react';
import App from './App';
import './App.css';
const Home = () => {
  return (
      <div
        className="content"
        style={{
          margin: '135px 0px',
          fontWeight: 'bold',
          fontSize: '34px',
          color: '#0091ff',
        }}
      >
        <div className="div-text">
          <h2>Hello I'm</h2>
          <span>Mahmoud Ali Mahmoud</span>
          <h2>Full Stack Developer</h2>

          <div className="social-link" >
            <a href="https://api.whatsapp.com/send?phone=201001514586" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="https://www.instagram.com/mahmoud.a.abdulrahim" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/Mahmoud.A.AbdulRahim" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://www.linkedin.com/in/mahmoud-a-abdelrahim-8bb01b364" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>

          <a href="viduo/Mahmoud Ali Mahmoud.pdf" className="btn btn-primary mt-3" download>
            Download CV
          </a>
        </div>
      </div>
  );
};

export default Home;
