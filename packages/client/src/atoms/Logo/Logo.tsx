import React from "react";
import { ILogo } from ".";
const Logo: React.FC<ILogo> = ({ logo, appData }) => {
  return (
    <div>
      {logo?.src ? <image href={logo.src} /> : <h1>{logo?.name}</h1>}
      {appData && appData.server.dbName === "dev" && (
        <>
          <p>Dev - </p>
          <div>
            <p>Client: {appData.clientVersion}</p>
            <p>Server: {appData.server.serverVersion}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Logo;
