import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Programs from './pages/Programs';
import StudentLife from './pages/StudentLife';
import News from './pages/News';
import Contact from './pages/Contact';
import Teachers from './pages/Teachers';
import ParentPortal from './pages/ParentPortal';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-white to-gray-100">
      <Header />
      <div className="flex-grow">
        <main className={`${isMobile ? 'pl-0' : 'pl-64'} pt-4 transition-all duration-300`}>
          <Home />
          <About />
          <Admissions />
          <Programs />
          <StudentLife />
          <News />
          <Teachers />
          <ParentPortal />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;