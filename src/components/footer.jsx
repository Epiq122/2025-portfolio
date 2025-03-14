const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full py-6 mt-20 border-t border-white/10 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg'>
      <div className='max-w-5xl mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-400 text-sm'>
            © {currentYear} Robert Gleason. All rights reserved.
          </p>
          <div className='mt-4 md:mt-0 flex items-center space-x-4'>
            <a
              href='https://github.com/Epiq122'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-white transition-colors'
              aria-label='GitHub'
            >
              GitHub
            </a>
            <span className='text-gray-600'>•</span>
            <a
              href='https://www.linkedin.com/in/robert-gleason-222b30178/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-white transition-colors'
              aria-label='LinkedIn'
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
