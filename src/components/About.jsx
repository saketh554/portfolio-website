import React from 'react';
import '../App.css';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const About = () => {
  return (
    <div>
      <div className='bg-black h-full w-full text-white flex flex-col items-center justify-center about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col items-center text-center sm:w-[80%] px-4'>
          <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
          <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
            🤵 Hi, I’m Saketh Reddy Vallapreddy, a Master’s student in Computer Science at the University of Central Missouri, set to graduate in May 2025. I have over two years of professional experience in full-stack development, backend systems, and cloud technologies. My expertise lies in building scalable web applications, optimizing database performance, and implementing serverless architectures to solve real-world problems. As a seasoned <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/saketh-reddy-aa06b622b/' target='_blank'>Software Developer</a>, I specialize in the MERN stack and enjoy delivering robust and innovative solutions🚀.
            <br />
            Beyond coding, I work as a student worker at Sodexo, where I assist the chef in the kitchen and use my computer science knowledge to help my supervisor streamline tasks. When I’m not working or coding, you’ll find me on the badminton or pickleball court, recharging my energy and solving life's problems one smash at a time! 🏸😄
          </p>
          <ButtonLink
            url='https://drive.google.com/file/d/1wkbKJDNXl1Jd81YrWuWos4gfVq6DNCkD/view?usp=drive_link'
            text='View Resume →'
            padding={`p-3`}
          />
        </div>

        {/* Contact Section */}
        <div className='mt-20 flex flex-col items-center text-center'>
          <p className='text-white text-[20px] font-medium'>
            📞 Phone: <a href='tel:+16604418159' className='text-green-300 hover:text-green-500 duration-300'>+1 (660) 441-8159</a>
          </p>
          <p className='text-white text-[20px] font-medium mt-4'>
            ✉️ Email: <a href='mailto:saketh.reddy3690@gmail.com' className='text-green-300 hover:text-green-500 duration-300'>saketh.reddy3690@gmail.com</a>
          </p>
        </div>

        {/* References Section */}
        <div className='mt-20 sm:px-16 px-2'>
          <h3 className='text-3xl font-bold text-white'>What Others Say About Me</h3>
          <div className='mt-8 space-y-6'>
            <blockquote className='text-gray-300 text-[17px] italic border-l-4 border-green-300 pl-4'>
              "Saketh is an intelligent and creative student with excellent problem-solving skills and a strong eagerness to learn. He has great communication skills and is highly responsible." — <strong>Lianwen Wang, Ph.D.</strong>, Professor of Statistics and Mathematics
            </blockquote>
            <blockquote className='text-gray-300 text-[17px] italic border-l-4 border-green-300 pl-4'>
              "Saketh has a deep understanding of computer science concepts and was one of the top performers in the course. He possesses the skills and dedication necessary to excel in any role." — <strong>Suoju He, Ph.D.</strong>, Assistant Instructor of Computer Science
            </blockquote>
          </div>

          {/* View Reference Letters Section */}
          <div className='mt-12'>
            <h3 className='text-3xl font-bold text-white'>View My Reference Letters</h3>
            <div className='mt-4 space-y-4'>
              <ButtonLink
                url='https://drive.google.com/file/d/19WStFJd4iKdqfVIo5usyrsh4Ucg0VFIV/view?usp=drive_link'
                text='View Letter from Prof. Suoju He  →'
                padding={`p-3`}
              />
              <ButtonLink
                url='https://drive.google.com/file/d/1u3nFMy1ip6pG8lehgspKaG2Q-lJMkeig/view?usp=sharing'
                text='View Letter from Prof. Lianwen Wang →'
                padding={`p-3`}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;
