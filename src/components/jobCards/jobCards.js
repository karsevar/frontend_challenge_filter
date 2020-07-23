import React from "react";
import "./jobCards.scss";

import photosnap from "../../images/photosnap.svg";
import manage from "../../images/manage.svg";
import account from "../../images/account.svg";
import myhome from "../../images/myhome.svg";
import loopStudios from "../../images/loop-studios.svg";
import faceit from "../../images/faceit.svg";
import shortly from "../../images/shortly.svg";
import insure from "../../images/insure.svg";
import eyecamCo from "../../images/eyecam-co.svg";
import theAirFilterCompany from "../../images/the-air-filter-company.svg";

function JobCards(props) {
  const companyLogos = {
    photosnap: photosnap,
    manage: manage,
    account: account,
    myhome: myhome,
    loopStudios: loopStudios,
    faceit: faceit,
    shortly: shortly,
    insure: insure,
    eyecamCo: eyecamCo,
    theAirFilterCompany: theAirFilterCompany,
  };

  const jobData = props.jobData;
  console.log("job data in JobCards component", jobData);
  return (
    <div className='job-cards-container'>
      {jobData.map((job) => {
        return (
          <div className='job-card'>
            <div className='job-info-logo-container'>
              <div className='logo-container'>
                <img src={companyLogos[job.logo]} />
              </div>
              <div className='job-info-container'>
                <div className='job-company-container'>
                  <h4>{job.company}</h4>
                  {job.new ? (
                    <div className='new-job'>
                      <h4>NEW!</h4>
                    </div>
                  ) : (
                    <></>
                  )}
                  {job.featured ? (
                    <div className='featured-job'>
                      <h4>FEATURED</h4>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div className='job-title-container'>
                  <h2>{job.position}</h2>
                </div>
                <div className='job-specifics-container'>
                  <h4>{job.postedAt}</h4>
                  <span>&#183;</span>
                  <h4>{job.contract}</h4>
                  <span>&#183;</span>
                  <h4>{job.location}</h4>
                </div>
              </div>
            </div>
            <div className='job-skills-container'>
              {job.skillButtons ? (
                job.skillButtons.map((skill) => {
                  return (
                    <div className='skill-button'>
                      <h4>{skill}</h4>
                    </div>
                  );
                })
              ) : (
                <></>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default JobCards;
