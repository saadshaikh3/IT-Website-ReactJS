import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import ssklogo from '../../../images/sskenterpriseremovebgpreview.png';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
// import { MdFingerprint } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Subscribe for more info
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Email'
            />
            <Button buttonStyle='btn--outline' buttonColor='golden'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h1>Sentiment Analysis</h1>
                <div className='social-icons'>
                    <Link
                    className='social-icon-link'
                    to='/'
                    target='_blank'
                    aria-label='Facebook'
                    >
                    <FaFacebook />
                    </Link>
                    <Link
                    className='social-icon-link'
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                    >
                    <FaInstagram />
                    </Link>
                    <Link
                    className='social-icon-link'
                    to={
                        '/'
                    }
                    target='_blank'
                    aria-label='Youtube'
                    >
                    <FaYoutube />
                    </Link>
                    <Link
                    className='social-icon-link'
                    to='/'
                    target='_blank'
                    aria-label='Twitter'
                    >
                    <FaTwitter />
                    </Link>
                    <Link
                    className='social-icon-link'
                    to='/'
                    target='_blank'
                    aria-label='LinkedIn'
                    >
                    <FaLinkedin />
                    </Link>
                </div>
            </div>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <p className='footer-subscription-text'>
                We are a team of undergrad Computer Information Systems Engineering. We belong to batch 2018. This is our Final Year Project.  
            </p>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>+9233567892</Link>
            <Link to='/'>ssk486@gmail.com</Link>
          </div>
        
            <div className='footer-link-items'>
                <h2>Quick Links</h2>
                <Link to='/sign-up'>Sign Up</Link>
                <Link to='/features'>Why Us?</Link>
                <Link to='/services'>Services</Link>
                <Link to='/more'>Plans</Link>
            </div>
        </div>
      </div>
      <p className='footer-subscription-heading'>________________________________________________________________________________________</p>
      <section className='social-media'>
        <div className='social-media-wrap'>
            <div className='footer-logo'>
                <Link to='/' className='social-logo'>   
                <img src={ssklogo} alt='SSKLOGO' className='navbar-icon' />
                </Link>
            </div>
            <small className='website-rights'>2021 Company Ltd. All Rights Reserved.</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;