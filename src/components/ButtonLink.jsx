import React from "react";

function ButtonLink({ url, text, padding }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`transition ease-in-out duration-300 ${padding} rounded-md text-white border-2 hover:bg-white hover:text-black hover:scale-110 hover:-translate-y-1 cursor-pointer`}
    >
      {text}
    </a>
  );
}

export default ButtonLink;
