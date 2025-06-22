import React, { useState, useEffect } from "react";

const name = "Saketh";

function Home() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (name && index < name.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + name[index]);
        setIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black text-white">
      {/* Background only on Home */}
      <div className="area absolute top-0 left-0 w-full h-full -z-10">
        <ul className="circles">
          <li /><li /><li /><li /><li />
          <li /><li /><li /><li /><li />
        </ul>
      </div>

      <div
        className="hero h-[calc(100vh)] flex justify-center items-center text-white"
        id="hero"
      >
        <div className="pt-4 h-36 backdrop-blur-sm rounded-3xl">
          <h1 className="text-6xl sm:text-7xl font-extrabold mt-2">
            Hi, I'm&nbsp;
            <span className="text-yellow-200 font-extrabold">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          <p className="mt-3 text-xl">
            I build scalable systems and optimize performance with full-stack
            expertise.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
