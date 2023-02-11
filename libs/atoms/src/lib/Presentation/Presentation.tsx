import React from "react"
import {styles, defaultPresentation, Ipresentation} from ".";

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
        <li key={listElement.id}>
          <strong>{listElement.title}</strong> {listElement.content}
       </li>
      ))}
      </ul>
      <h3>{presentation.techTitle}</h3>
      <ul>
        {presentation.techList.map((listElement)=> (
          <li key={listElement.id}>{listElement.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default Presentation;
