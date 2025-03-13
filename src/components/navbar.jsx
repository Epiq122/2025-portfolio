import { useEffect } from 'react';

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  return (
    <div className='fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg'>
      <div className='max-w-5xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          <a href='#home' className='font-mono text-xl font-bold text-white'>
            robert<span className='text-blue-500'>gleason</span>{' '}
          </a>
          <button
            className='w-8 h-8 flex flex-col justify-center items-center md:hidden focus:outline-none'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 mt-1.5 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 mt-1.5 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
          <div className='hidden md:flex items-center space-x-8'>
            <a
              href='#home'
              className='text-gray-300 hover:text-white transition-colors'
            >
              Home
            </a>
            <a
              href='#about'
              className='text-gray-300 hover:text-white transition-colors'
            >
              About
            </a>
            <a
              href='#projects'
              className='text-gray-300 hover:text-white transition-colors'
            >
              Projects
            </a>
            <a
              href='#contact'
              className='text-gray-300 hover:text-white transition-colors'
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
