import React from "react";
import isEqual from "lodash/isEqual";
import { ILogo, styles } from ".";

/**
 * Server Side Component
 *
 * The Logo component is a customizable React functional component
 * designed to display a logo image or name, providing a versatile solution for branding
 * within React applications. *
 * Leveraging the power of React.memo for optimization, this component intelligently
 * manages re-renders by comparing its props and only updating when necessary.
 * It supports dynamic rendering based on provided logo data, showing the image if
 * available, or alternatively, displaying the logo's name.
 *
 * Additionally, in development mode,
 * the component offers the option to showcase development information,
 * such as client and server version details. Easily integrable into various
 * React projects, the Logo component offers flexibility and branding
 * consistency
 *
 *  ### Usage:
 *  ```jsx
 *    <Logo logo={logoData} appData={appData} />
 *  ```
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
export const Logo: React.FC<ILogo> = ({ logo, appData }) => {
  return (
    <div className={styles.logo}>
      <div>
        {logo?.src ? (
          <img src={logo.src} alt={logo.name} />
        ) : (
          <h1>{logo?.name}</h1>
        )}
      </div>
      <div className={styles.div}></div>
      {appData && appData.server.dbName === "dev" && (
        <div className={styles.dev}>
          <p>Dev</p>
          <div className={styles.data}>
            <p>Client:{appData.clientVersion}</p>
            <p>Server:{appData.server.serverVersion}</p>
          </div>
        </div>
      )}
    </div>
  );
};

function arePropsEqual(prevProps: ILogo, nextProps: ILogo) {
  return (
    isEqual(prevProps.logo, nextProps.logo) &&
    isEqual(prevProps.appData, nextProps.appData)
  );
}

export default React.memo(Logo, arePropsEqual);
