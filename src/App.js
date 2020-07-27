import React, { useState, useEffect } from "react";
import "./App.css";

import HeaderImage from "./components/headerImage/headerImage";
import JobCards from "./components/jobCards/jobCards";
import FilterCard from "./components/filterCard/filterCard.js";

function App() {
  const [filterData, setFilterData] = useState([]);
  // console.log("data in the application", appData);
  const [filterLength, setFilterLength] = useState(0);

  return (
    <div className='App'>
      <HeaderImage />
      <FilterCard
        filterData={filterData}
        setFilterData={setFilterData}
        setFilterLength={setFilterLength}
        filterLength={filterLength}
      />
      <JobCards
        setFilterData={setFilterData}
        filterData={filterData}
        filterLength={filterLength}
        setFilterLength={setFilterLength}
      />
    </div>
  );
}

export default App;
