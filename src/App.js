import React, { useState, useEffect } from "react";
import "./App.css";

import HeaderImage from "./components/headerImage/headerImage";
import JobCards from "./components/jobCards/jobCards";
import FilterCard from "./components/filterCard/filterCard.js";
import appData from "./data.json";

function App() {
  const [jobData, setJobData] = useState(
    appData.map((job) => {
      return {
        ...job,
        skillButtons: [...job.tools, ...job.languages, job.role, job.level],
      };
    })
  );

  const [filterData, setFilterData] = useState([]);
  // console.log("data in the application", appData);

  return (
    <div className='App'>
      <HeaderImage />
      <FilterCard filterData={filterData} />
      <JobCards
        jobData={jobData}
        setJobData={setJobData}
        setFilterData={setFilterData}
        filterData={filterData}
      />
    </div>
  );
}

export default App;
