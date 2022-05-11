
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import More from './components/pages/More/More';
import Features from './components/pages/Features/Features';
import Services from './components/pages/Services/Services';


// import Login from './components/pages/Login/Login';
// import GetStarted from './components/pages/GetStarted/GetStarted';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/more' element={<More/>} />
        <Route path='/features' element={<Features/>} />
        <Route path='/services' element={<Services/>} />
        {/* <Route path='/login' element={<Login/>} /> */}
        {/* <Route path='/sign-up' element={<GetStarted/>} />  */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
