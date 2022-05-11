import React from 'react'
import { motion } from 'framer-motion'
import "./AllServices.css"
import imgrep from '../images/undraw_Hiring_re_yk5n.png'
import grimg from '../images/undraw_Connected_re_lmq2.png'
import senimg from '../images/undraw_Growth_analytics_re_pyxf.png'
import webimg from '../images/undraw_Web_search_re_efla.png';

function AllServices() {


  const imgMotion = {
    rest: {
      opacity: 1,
      transition:{ delay: 0.1, duration: 0.3} },
    hover: {
      opacity: 0,
      transition:{ delay: 0.1, duration: 0.3}
    }
  };
  
  const hMotion = {
    rest: { opacity: 1, ease: "easeOut", duration: 0.2, type: "tween" },
    hover: {
        opacity: 1,
        y: -250,
        // scale: 1.5,
        // background: 'white',
        transition: {
          type: "tween",
          ease:"easeOut",
        }
    }
  };

  const pMotion = {
    rest: { opacity: 0},
    hover: {
      opacity: 1,
      y: -240,
      // scale: 1.5,
      // background: 'white',
      transition: {
      // duration:0.2,
      type: "tween",
      ease:"easeIn"
        }
    }
  };

  return (

    <div className='service-section'>
      <div className="service-wrapper">
      <h1 className='heading'>WHAT WE DO?</h1>
      <motion.div className='service-card-container'
      initial={{ x: 1400 }}
      animate={{ x: 160 }}
      transition={{
          type: "tween",
          duration: "1.5",
          delay: "0.2",
          ease:'easeOut'
      }}>
        <motion.div className="card-item" initial="rest" whileHover="hover" animate="rest">
            <motion.img className='ser' src={webimg} alt='Web Scrapper' variants={imgMotion}/>
            <motion.h1 className='inner-heading' variants={hMotion}>
                  WEB SCRAPPING
            </motion.h1>
            <motion.p variants={pMotion} className="card-p">
            Getting tired querying out the data? Taking lots of time finding a particular topic facebook post? Use the web scrapper feature
            to complete the job in few seconds.It functions on the principle of data mining. 
            and allows you to retrieve Tweets and Facebook posts in a specific 
            amount along with other features and consolidate them in a single csv file.
            </motion.p>
        </motion.div>
        <motion.div className="card-item" initial="rest" whileHover="hover" animate="rest">
            <motion.img className='ser' src={senimg} alt='Sentiment analysis' variants={imgMotion}/>
            <motion.h1 className='inner-heading' variants={hMotion}>
              SENTIMENT ANALYSIS
            </motion.h1>
            <motion.p variants={pMotion} className="card-p">
            Identifying whether a textual information is positive or negative manually can be 
            frantic and time consuming provided large amounts of data. 
            This feature predicts and labels all the textual data, in the form of a sentence, as positive or negative.
            Just enter your csv file and get the output csv with labelled sentiments.
            </motion.p>
        </motion.div>
        <motion.div className="card-item" initial="rest" whileHover="hover" animate="rest">
            <motion.img className='ser' src={grimg} alt='Graph analysis' variants={imgMotion}/>
            <motion.h1 className='inner-heading' variants={hMotion}>
              GRAPH ANALYSIS
            </motion.h1>
            <motion.p variants={pMotion} className="card-p">
            This technique helps in the generation of a global map with users pin-pointed with their locations and their username. 
            This component only works if the data provided contains the location of each of the user with their textual data. 
            </motion.p>
        </motion.div>
        <motion.div className="card-item" initial="rest" whileHover="hover" animate="rest">
            <motion.img className='ser' src={imgrep} alt='Report generation' variants={imgMotion}/>
            <motion.h1 className='inner-heading' variants={hMotion}>
              REPORTS GENERATION
            </motion.h1>
            <motion.p variants={pMotion} className="card-p">
            It generates a pdf report describing the data in numerous manners by illustrating graphs as well as the 
            total number of positive and negative sentiments, prediction as a whole that the given sample of data lies on either polarity, 
            and other numeral analysis. Enter your csv file and obtain the magical report.
            </motion.p>
        </motion.div>
      </motion.div>
      </div>
    </div>
  )
}

export default AllServices