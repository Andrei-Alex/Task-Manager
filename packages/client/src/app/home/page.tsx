"use client";
import React from "react";
import { withAuth } from "@/Hocs/withAuth/withAuth";

const Home = () => {
  return (
    <>
      <p>Home</p>
    </>
  );
};
export default withAuth(Home);
