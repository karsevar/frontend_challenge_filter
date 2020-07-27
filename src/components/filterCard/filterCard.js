import React, { useEffect } from "react";

import removeIcon from "../../images/icon-remove.svg";
import "./filterCard.scss";

function FilterCard(props) {
  const filterData = props.filterData;
  const setFilterData = props.setFilterData;
  const setFilterLength = props.setFilterLength;
  const filterLength = props.filterLength;

  const handleDeleteClick = (event, skillName) => {
    const newFilterData = filterData.filter(
      (filterName) => skillName !== filterName
    );
    setFilterData([...newFilterData]);
    setFilterLength(filterLength - 1);
    console.log("filter length", filterLength);
  };
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
              <div
                className='filter-card'
                onClick={(event) => handleDeleteClick(event, filter)}
              >
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
