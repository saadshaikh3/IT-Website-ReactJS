import React, {useState} from 'react'
import {Link} from 'react-router-dom'
// import {MdFingerprint} from 'react-icons/md'
import {FaBars, FaTimes} from 'react-icons/fa'
import ssklogo from "../images/sskenterpriseremovebgpreview.png";
import { Button } from './Button';
import "./Navbar.css";
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    // useEffect(() => {
    //   showButton();
    window.addEventListener('resize', showButton);
    //   return {
    //     window.removeEventListener('resize', showButton)
    //   }
    // }, []);
    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
            <div className="navbar-container container">
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    {/* <MdFingerprint className='navbar-icon' /> */}
                    <img src={ssklogo} alt='SSKLOGO' className='navbar-icon' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    {click? <FaTimes/> : <FaBars/>}
                </div>
                <ul className={ click? 'nav-menu active':'nav-menu'}>
                <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/services'className='nav-links' onClick={closeMobileMenu}>
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/features' className='nav-links' onClick={closeMobileMenu}>
                  Features
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/more' className='nav-links' onClick={closeMobileMenu}>
                  More
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                  Login
                </Link>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link to='/sign-up' className='btn-link'>
                    <Button buttonStyle='btn--outline' buttonColor='golden'>Get Started</Button>
                  </Link>
                ) : (
                  <Link to='/sign-up' className='btn-link' onClick={closeMobileMenu}>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      buttonColor='golden'
                    >
                      Get Started
                    </Button>
                  </Link>
                )}
              </li>
                </ul>

            </div>
        </div>
        </IconContext.Provider>
        </>
  )
}

export default Navbar