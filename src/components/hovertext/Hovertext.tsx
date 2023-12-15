import React from "react";
import styles from "./Hovertext.module.css";

interface HoverTextProps {
  text: string;
  parentClass?: string;
}

const HoverText: React.FC<HoverTextProps> = (props) => {
  return (
    <div className={props.parentClass}>
      {props.text.split("").map((char, index) => (
        <p key={index} className={styles.hovertext}>
          {char === " " ? "\u2009" : char}
        </p>
      ))}
    </div>
  );
};

export default HoverText;
