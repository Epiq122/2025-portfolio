import RevealOnScroll from '../reveal-on-scroll';

const About = () => {
  const frontendSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Next.js',
    'Typescript',
    'Tailwind CSS',
  ];

  const backendSkills = [
    'Node.js',
    'Java',
    'Spring Boot',
    'PostgreSQL',
    'MySQL',
    'Golang',
  ];
  return (
    <section
      id='about'
      className='min-h-screen flex items-center justify-center py-20'
    >
      <RevealOnScroll>
        <div className='max-w-3xl mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
            About Me
          </h2>
          <div className='rouned-xl p-8 border-white/10 border hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(192,132,252,0.4)] transition-all duration-300'>
            <p className='text-gray-00 text-lg mb-8'>
              Full Stack Developer with expertise in building scalable and
              efficient web applications for both small and big business, to
              bring there ideas to life.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                <h3 className='text-xl font-bold mb-4'>Frontend</h3>
                <div className='flex flex-wrap gap-2'>
                  {frontendSkills.map((skill, index) => (
                    <span
                      key={index}
                      className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] '
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                <h3 className='text-xl font-bold mb-4'>Frontend</h3>
                <div className='flex flex-wrap gap-2'>
                  {backendSkills.map((skill, index) => (
                    <span
                      key={index}
                      className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] '
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
            <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'> 🏫 Education</h3>
              <ul className=' list-inside text-gray-400 space-y-2'>
                <li>
                  <h4 className='text-lg font-bold'>CodersCampus Bootcamp</h4>
                  <p className='text-gray-400'>2022 - 2023</p>
                </li>
                <li>Relavent Coursework: Java, Spring Boot, React, MySQL</li>
              </ul>
            </div>
            <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'> 💼 Work Experience</h3>
              <div className='space-y-4 text-gray-300'>
                <div>
                  <h4 className='font-semibold'>
                    Full Stack library booking app for coderscampus final
                    project (2022)
                  </h4>

                  <p className='text-gray-400 mt-2'>
                    Developed a full stack application, built with React and
                    Springboot and a MySQL database, complete with user login
                    and admin panel as well as a rating system and a review
                    section
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
export default About;
