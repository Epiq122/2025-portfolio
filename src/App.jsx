import './index.css';
import LoadingScreen from './components/loading-screen';
import { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import MobileMenu from './components/mobile-menu';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />}
      <div
        className={`transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      >
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {/* Your other content goes here */}
      </div>
    </>
  );
}

export default App;
