import React from "react"
import {IColor, styles} from "."


/**
 * Color
 * Display Color from themes
 * @param {Object} color - Object with main text content
 * @return {JSX} Display text in JSX elements
 */

const Color: React.FC<IColor> = ({color}) => {
  return (
    <div className={styles['container']} style={{backgroundColor: color}}>
      <p>{color}</p>
    </div>
  );
}

export default Color;
