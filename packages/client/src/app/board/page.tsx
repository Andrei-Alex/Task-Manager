import React from "react";
import axios from "axios";

const Board = async () => {
  const res = await axios.get("http://localhost:3000/api/appdata");
  return <>{res.data.server.dbName}</>;
};

export default Board;
