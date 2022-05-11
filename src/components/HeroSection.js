import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import img from '../images/homepagemain.png'

function HeroSection({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel1,
    buttonLabel2,
    // img,
    alt,
    imgStart
  }) {
  return (
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>    
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <div className='top-line'><hr /></div>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                <Link to='/sign-up'>
                  <Button buttonSize='btn--wide' buttonStyle='btn--outline' buttonColor='golden'>
                    {buttonLabel1}
                  </Button>
                </Link>
                <Link to='/more'>
                  <Button buttonSize='btn--wide' buttonStyle='btn--outline' buttonColor='golden'>
                    {buttonLabel2}
                  </Button>
                </Link>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={img} alt={alt} className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default HeroSection