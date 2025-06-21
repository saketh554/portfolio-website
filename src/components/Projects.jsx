import React from "react";
import sneaker from '../assets/sneaker.png';
import simon from '../assets/simon.png';
import copeople from '../assets/n.png';
import drum from '../assets/drum.png';
import Footer from './Footer';

const ProjectCard = ({ image, title, description, git, technologies }) => {
  return (
    <div className="max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
        <img className="w-full rounded-t-lg h-auto object-cover" src={image} alt={title} />
      </div>
      <div className="p-4 sm:p-6">
        <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
          {title}
        </h5>
        <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">
          {description}
        </p>
      </div>
      <div className="m-4 flex justify-between items-center">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tag, index) => (
            <p key={`${index}-${tag}`} className="text-[14px] text-blue-500">
              #{tag}
            </p>
          ))}
        </div>
        <a
          href={git}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-300 border border-gray-200 rounded-lg shadow px-3 py-1 hover:text-green-500 duration-300"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-between overflow-x-hidden">
      <div className="flex flex-wrap gap-7 justify-center items-start px-6 pt-24 pb-12">
        {project.map((item, index) => (
          <ProjectCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            git={item.git}
            technologies={item.technologies}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export const project = [
  {
    title: 'Notes',
    description:
      'Notes lightweight React-based Notes App enabling users to add, delete, and manage notes seamlessly. It features dynamic state management with useState and a clean, intuitive user interface.',
    image: copeople,
    git: 'https://github.com/saketh554/Notes-App',
    technologies: ['MongoDb', 'ReactJS', 'NodeJS'],
  },
  {
    title: 'Sneaker-Kart',
    description:
      'Built a sneaker e-commerce platform with a user-friendly interface, secure authentication, product filtering, and an admin panel for inventory and order management.',
    image: sneaker,
    git: 'https://github.com/saketh554/Sneaker-Kart',
    technologies: ['React JS', 'NodeJS', 'MongoDB', 'ExpressJS'],
  },
  {
    title: 'Simon Game',
    description:
      'A fun and interactive memory game built using HTML, CSS, and JavaScript. Features progressively challenging levels and a colorful interface to enhance user engagement.',
    image: simon,
    git: 'https://github.com/saketh554/Simon-Game',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Drum Kit',
    description:
      'A fun game that lets users play a virtual drum set using keyboard keys. Built with HTML, CSS, and JavaScript, it features interactive sound effects for a fun experience.',
    image: drum,
    git: 'https://github.com/saketh554/Drumkit',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
];

export default Projects;
