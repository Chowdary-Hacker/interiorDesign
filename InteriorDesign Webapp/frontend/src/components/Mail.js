import React, { useState } from 'react';
import axios from 'axios'; import { RiRewindStartFill } from "react-icons/ri";
import bgimg from '../images/interior-design-of-a-house-1571460.jpg'; import logo from '../images/logo.png'; import { MdReviews } from "react-icons/md"; import { IoIosContact } from "react-icons/io"; import { FiLogIn } from "react-icons/fi";
import {Link, useNavigate} from 'react-router-dom';

function Mail() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
 const nav = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/send-email', { message, email });
      alert('Email sent successfully');
    } catch (error) {
      console.error('There was an error sending the email:', error);
      alert('Failed to send email');
    }
  };

  return (
    <div className='App' style={{backgroundColor:'lightgreen'}}>
        <header style={{backgroundColor:'pink'}}>
     <img onClick={()=>nav('/')} height="100%" className='loc' src={logo} alt='img'></img>
     
      
    <Link to={'/Designs'}> <span className='corp' style={{paddingLeft:'166px'}}><svg class="_1GTCc" viewBox="0 0 20 20" height="20" width="20" fill="none"><rect x="2.46094" y="7.98145" width="15.0784" height="10.7765" rx="1.52523" stroke="#02060C" stroke-opacity="0.75" fill="none" stroke-width="1.8" stroke-linejoin="round"></rect><path d="M6.17822 4.91866C6.17822 3.90782 6.99767 3.08838 8.0085 3.08838H11.9916C13.0024 3.08838 13.8219 3.90782 13.8219 4.91866V5.22965C13.8219 5.61625 13.5085 5.92965 13.1219 5.92965H6.87822C6.49162 5.92965 6.17822 5.61625 6.17822 5.22965V4.91866Z" fill="#02060C" fill-opacity="0.75"></path></svg></span> <span style={{paddingBottom:'1%'}} className='corp'>&nbsp;&nbsp;Designs</span> 
    </Link>
    <Link> <span className='corp' style={{paddingLeft:'11%'}}><MdReviews /> &nbsp;Reviews </span> 
    </Link>      
    <Link to={'/Mail'}>  <span className='corp' style={{paddingLeft:'11%'}}><IoIosContact />&nbsp;&nbsp;Contact</span>
    </Link>
    <Link>  <span className='corp' style={{paddingLeft:'11%'}}><FiLogIn /> &nbsp;&nbsp;SignIn/SignUp</span>
    </Link> 
    </header>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <h3>About Us</h3>
            <p>We provide top-notch interior design services to make your home or office space look stunning.</p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Email: info@interiordesign.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Mail;
