import React from 'react';

interface HoverTextProps {
  text: string;
}

const HoverText: React.FC<HoverTextProps> = (props) => {

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <>
      {props.text.split("").map((char, index) => (
        <p key={index} className="inline-block hover:scale-125 hover:text-purple-500 transition-all duration-75 ease-in-out">
          {char}
        </p>
      ))}
    </>
  );
}

export default HoverText;