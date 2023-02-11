import React from "react"
import styles from './Presentation.module.scss';
import {defaultPresentation, Ipresentation} from ".";

/**
 * Presentation
 * @param {Object} presentation - Object with main text content
 * @return {JSX} Display text in JSX elements
 */

const Presentation: React.FC<Ipresentation> = ({presentation = defaultPresentation}) => {
  return (
    <div className={styles['container']}>
      <div>
        <h1>{presentation.title}</h1>
        <h2>{presentation.version}</h2>
      </div>
      <p>{presentation.description}</p>
      <h3>{presentation.listTitle}</h3>
      <ul>
      {presentation.listElements.map((listElement)=> (
        <li><strong>{listElement[0]}</strong> {listElement[1]}</li>
      ))}
      </ul>
      <h3>{presentation.techTitle}</h3>
      <ul>
        {presentation.techList.map((listElement)=> (
          <li>{listElement}</li>
        ))}
      </ul>
    </div>
  );
}

export default Presentation;
