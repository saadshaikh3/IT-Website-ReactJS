import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { BsXDiamondFill, BsBuilding,BsFillTelephoneFill } from 'react-icons/bs';
import { TiUser, TiTick } from 'react-icons/ti';
import { RiUserStarFill } from 'react-icons/ri';
import {MdEmail} from 'react-icons/md';
import { GiCrystalize, GiCrossMark } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#ffd700' }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Plans</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <TiUser />
                </div>
                <h3>Basic</h3>
                <h4>$4.99 / mo</h4>
                <p>or free Trial for 1 day</p>
                <ul className='pricing__container-features'>
                  <li><TiTick /> Prediction of sentiments</li>
                  <li><TiTick /> Data Analytics report</li>
                  <li><GiCrossMark/> Geofencing</li>
                  <li><GiCrossMark/> Social Network Analysis</li>
                  <li><GiCrossMark/> Criminal Profiling</li>

                </ul>
                <Button buttonSize='btn--wide' buttonColor='golden'>
                  Choose
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <RiUserStarFill />
                </div>
                <h3>Premium</h3>
                <h4>$9.99 / mo</h4>
                <p>or free Trial for 1 day</p>
                <ul className='pricing__container-features'>
                  <li><TiTick /> Prediction of sentiments</li>
                  <li><TiTick /> Data Analytics report</li>
                  <li><TiTick /> Geofencing</li>
                  <li><TiTick /> Social Network Analysis</li>
                  <li><GiCrossMark/> Criminal Profiling</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='golden'>
                  Choose
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsBuilding />
                </div>
                <h3>Enterprise</h3>
                <h4>$14.99 / mo</h4>
                <p>or free Trial for 1 day</p>
                <ul className='pricing__container-features'>
                  <li><TiTick /> Prediction of sentiments</li>
                  <li><TiTick /> Data Analytics report</li>
                  <li><TiTick /> Geofencing</li>
                  <li><TiTick /> Social Network Analysis</li>
                  <li><TiTick /> Criminal Profiling</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='golden'>
                  Choose
                </Button>
              </div>
            </Link>
          </div>
        </div>
        
        <div className='contact__section'>
            <div className='pricing__wrapper'>
                <h1 className='pricing__heading'>Contact Us</h1>
                <div className='contact__detail'>
                    <ul className='pricing__container-features'>
                    <li><MdEmail /> ssk486@gmail.com</li>
                    <li><BsFillTelephoneFill /> +923363418627</li>          
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </IconContext.Provider>
  );
}
export default Pricing;