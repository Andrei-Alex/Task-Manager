import React from "react";

const Logo = ({ logo }: any) => {
  return (
    <div>{logo.src ? <image href={logo.src} /> : <h1>{logo.name}</h1>}</div>
  );
};

export default Logo;
