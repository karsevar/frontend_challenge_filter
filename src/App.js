import React, { useState, useEffect } from "react";
import "./App.css";

import HeaderImage from "./components/headerImage/headerImage";
import JobCards from "./components/jobCards/jobCards";
import appData from "./data.json";

function App() {
  const [jobData, setJobData] = useState([...appData]);
  // console.log("data in the application", appData);

  useEffect(() => {
    const newJobData = jobData.map((job) => {
      return {
        ...job,
        skillButtons: [...job.tools, ...job.languages, job.role, job.level],
      };
    });
    setJobData([...newJobData]);
    console.log(newJobData);
  }, []);

  return (
    <div className='App'>
      <HeaderImage />
      <JobCards jobData={jobData} />
    </div>
  );
}

export default App;
