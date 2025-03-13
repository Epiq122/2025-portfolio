const Home = () => {
  return (
    <section
      id='home'
      className='min-h-screen flex items-center relative justify-center'
    >
      <div className='text-center z-10 px-4'>
        <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent leading-right'>
          Hi, I'm Robert Gleason{' '}
        </h1>
        <p className='text-gray-400 text-lg md:text-xl mb-8'>
          I'm a web developer from Vancouver, BC. I love creating things for
          people to amplify there business
        </p>
        <div className='flex justify-center space-x-4'>
          <a
            href='#projects'
            className='bg-blue-500 text-white px-6 py-3 rounded-md font-medium transition relative overflow-hidden
            hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]
            '
          >
            View My Work
          </a>
          <a
            href='#contact'
            className='border border-blue-500/50 text-white px-6 py-3 rounded-md font-medium transition relative overflow-hidden
            hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(192,132,252,0.4)]
            '
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
export default Home;
