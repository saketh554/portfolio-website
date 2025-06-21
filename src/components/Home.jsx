import React, { useState, useEffect } from 'react';
import { name } from '../constants';
import Footer from './Footer';

const Home = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
  if (name && index < name.length) {
    const timeout = setTimeout(() => {
      setText((prev) => prev + name[index]);
      setIndex((prev) => prev + 1);
    }, 150);
    return () => clearTimeout(timeout);
  }
}, [index, name]);


  return (
    <div className='area relative z-0 bg-black w-screen h-screen'>
      <ul className="circles">
        <li></li><li></li><li></li><li></li><li></li>
        <li></li><li></li><li></li><li></li><li></li>
      </ul>
      <div className='hero relative h-[calc(100vh)] flex justify-center items-center text-white' id='hero'>
        <div className='pt-4 h-36 backdrop-blur-sm rounded-3xl'>
          <h1 className='text-6xl sm:text-7xl font-extrabold mt-2'>
            Hi, I'm&nbsp;
            <span className='text-yellow-200 font-extrabold'>
              {text}
              <span className='animate-pulse'>|</span>
            </span>
          </h1>
          <p className='mt-3 text-xl'>
            I build scalable systems and optimize performance with full-stack expertise.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
