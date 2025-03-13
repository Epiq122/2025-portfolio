const MobileMenu = ({ setIsMenuOpen }) => {
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='mobile-menu active fixed inset-0 z-30 bg-black/90 backdrop-blur-lg'>
      <div className='flex flex-col items-center justify-center h-full space-y-8 text-2xl'>
        <a
          href='#home'
          onClick={handleLinkClick}
          className='menu-item text-gray-300 hover:text-white transition-colors hover:scale-110 transform duration-200'
        >
          Home
        </a>
        <a
          href='#about'
          onClick={handleLinkClick}
          className='menu-item text-gray-300 hover:text-white transition-colors hover:scale-110 transform duration-200'
        >
          About
        </a>
        <a
          href='#projects'
          onClick={handleLinkClick}
          className='menu-item text-gray-300 hover:text-white transition-colors hover:scale-110 transform duration-200'
        >
          Projects
        </a>
        <a
          href='#contact'
          onClick={handleLinkClick}
          className='menu-item text-gray-300 hover:text-white transition-colors hover:scale-110 transform duration-200'
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
