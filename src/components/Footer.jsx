import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  const [count, setCount] = useState(null);
  const year = new Date().getFullYear();

  useEffect(() => {
    const workspace = "portfolio-team"; // ✅ Replace with your actual workspace name
    const counterName = "website-visits";

    const incrementUrl = `https://api.counterapi.dev/v2/${workspace}/${counterName}/up`;
    const getUrl = `https://api.counterapi.dev/v2/${workspace}/${counterName}`;

    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      fetch(incrementUrl)
        .then((res) => res.json())
        .then((data) => {
          if (data?.data?.up_count !== undefined) {
            setCount(data.data.up_count);
            sessionStorage.setItem("hasVisited", "true");
          }
        })
        .catch((err) => console.error("Error incrementing counter:", err));
    } else {
      fetch(getUrl)
        .then((res) => res.json())
        .then((data) => {
          if (data?.data?.up_count !== undefined) {
            setCount(data.data.up_count);
          }
        })
        .catch((err) => console.error("Error fetching counter:", err));
    }
  }, []);

  return (
    <div className="bg-slate-900 p-4" style={{ cursor: "default" }}>
      <div className="flex justify-between flex-wrap gap-4">
        <div className="text-white text-center w-full sm:w-auto font-light">
          <p>© {year} Saketh. All rights reserved.</p>
          {count !== null ? (
            <p className="text-sm text-gray-400 mt-1">👁️ {count} visits</p>
          ) : (
            <p className="text-sm text-gray-400 mt-1">Loading visits...</p>
          )}
        </div>
        <div className="text-white flex justify-around sm:w-[250px] w-full">
          <a
            href="mailto:saketh.reddy.career@gmail.com"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 hover:-translate-y-1"
          >
            <FiMail className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/saketh-reddy-aa06b622b/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 hover:-translate-y-1"
          >
            <AiFillLinkedin className="text-xl" />
          </a>
          <a
            href="https://github.com/saketh554"
            target="_blank"
            rel="noopener noreferrer"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 hover:-translate-y-1"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://leetcode.com/u/sakethnew/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 hover:-translate-y-1"
          >
            <SiLeetcode className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
