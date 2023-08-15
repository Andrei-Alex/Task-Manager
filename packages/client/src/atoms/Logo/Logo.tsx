import React from "react";
import { ILogo, styles } from ".";

/**
 * Logo Component
 *
 * This component displays a logo as image or text, along with optional
 * development mode information.
 *
 * @param {Object} logo - Logo information.
 * @param {string} logo.src - URL of the logo image.
 * @param {string} logo.name - Alternate text if the image is not available.
 * @param {Object} appData - Application information.
 * @param {Object} appData.server - Server-related information.
 * @param {string} appData.server.dbName - Name of the server's database.
 * @param {string} appData.server.serverVersion - Version of the server.
 * @param {string} appData.clientVersion - Version of the client application.
 *
 * @returns {JSX.Element} - Rendered Logo component.
 */
const Logo: React.FC<ILogo> = ({ logo, appData }) => {
  return (
    <div className={styles.logo}>
      {logo?.src ? (
        <img src={logo.src} alt={logo.name} />
      ) : (
        <h1>{logo?.name}</h1>
      )}
      {appData && appData.server.dbName === "dev" && (
        <div className={styles.dev}>
          <p>Dev</p>
          <div className={styles.data}>
            <p>Client: {appData.clientVersion}</p>
            <p>Server: {appData.server.serverVersion}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
