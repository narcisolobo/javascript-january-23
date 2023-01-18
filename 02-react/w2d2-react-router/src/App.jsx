import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import OneService from './components/OneService';
// Like a redirect for react router
import { Navigate } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import OneProject from './components/OneProject';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:service" element={<OneService />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/portfolio/:id' element={<OneProject />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
