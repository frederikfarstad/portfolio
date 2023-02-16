import React from 'react';

interface HoverTextProps {
  text: string;
}

const HoverText: React.FC<HoverTextProps> = (props) => {

  return (
    <>
      {props.text.split("").map((char, index) => (
        <p key={index} className="inline-block hover:scale-125 hover:text-purple-500 duration-75 transition-all ease-in-out select-none">
          {char}
        </p>
      ))}
    </>
  );
}

export default HoverText;