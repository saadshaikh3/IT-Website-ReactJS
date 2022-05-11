import React from 'react'
import './Whyssk.css';
import img1 from '../images/undraw_secure_files_re_6vdh-removebg-preview.png';
import img2 from '../images/undraw_online_transactions_02ka-removebg-preview.png';
import img3 from '../images/undraw_server_cluster_jwwq-removebg-preview.png';

function Whyssk({
    lightBg,
    lightText,
    headline1,
    headline2,
    headline3,
    alt,
    imgStart
  }) {
  return (
    <>
      <div
        className={lightBg ? 'feat__hero-section' : 'feat__hero-section darkBg'}
      >
        <div className='container'>
        <div>
            <h1 className={lightText ? 'heading' : 'heading darkf'} 
            style={{fontWeight: 600, paddingBottom:'10px'}} > WHY SSK ENTERPRISES?</h1>
        </div>
          <div
            className='rowf feat__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
             
            <div className='colf'>
              <div className='featone__hero-wrapper'> 
                <img src={img1} alt={alt} className='featone__hero-img' />
                <h1 className={lightText ? 'headingf' : 'headingf darkf'}>
                  {headline1}
                </h1>
              </div>
            </div>
            <div className='colf'>
              <div className='feattwo__hero-wrapper'> 
                <img src={img2} alt={alt} className='featone__hero-img' />
                <h1 className={lightText ? 'heading' : 'headingf darkf'}>
                  {headline2}
                </h1>
              </div>
            </div>
            <div className='colf'>
              <div className='featthree__hero-wrapper'> 
                <img src={img3} alt={alt} className='featone__hero-img' />
                <h1 className={lightText ? 'heading' : 'headingf darkf'}>
                  {headline3}
                </h1>
              </div>
            </div>         
          </div>
        </div>
      </div>
    </>
  );
}
export default Whyssk