"use client";
import React from "react";
import { withAuth } from "@/Hocs/Auth/withAuth";

const Home = () => {
  return (
    <>
      <p>Home</p>
    </>
  );
};
export default withAuth(Home);
