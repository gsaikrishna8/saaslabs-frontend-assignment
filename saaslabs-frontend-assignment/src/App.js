import React, { useEffect, useState } from "react";
import jsonData from "./frontend-assignment.json";
import Table from "./components/Table";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(jsonData);
  }, []);
  return (
    <div className="App">
      <h2>Projects List</h2>
      <Table tableData={data} />
    </div>
  );
}

export default App;