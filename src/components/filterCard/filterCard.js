import React, { useEffect } from "react";

import removeIcon from "../../images/icon-remove.svg";
import "./filterCard.scss";

function FilterCard(props) {
  const filterData = props.filterData;
  useEffect(() => {
    console.log("jobData from filterCard component", filterData);
  }, [filterData]);
  return (
    <div className='filter-cards-container'>
      <div
        className={
          filterData
            ? filterData.length
              ? "filter-card-menu display-menu"
              : "filter-card-menu"
            : "filter-card-menu"
        }
      >
        {filterData ? (
          filterData.map((filter) => {
            return (
              <div className='filter-card'>
                <h4>{filter}</h4>
                <div className='delete-btn-container'>
                  <img src={removeIcon} />
                </div>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default FilterCard;
