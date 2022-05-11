import React from 'react';
import HeroSection from '../../HeroSection';
import Whyssk from '../../Whyssk';
import { homeObjOne, homeObjTwo} from './Data';
import AllServices from '../../AllServices';

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <Whyssk {...homeObjTwo} />
      <AllServices />
    </>
  );
}

export default Home;