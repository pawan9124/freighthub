import React from "react";
import PropTypes from "prop-types";

const SelectMenu = props => {
  let selectOption = props.selectOption.map((data, index) => {
    return (
      <option value={data} name={data} key={"select" + index}>
        {data}
      </option>
    );
  });
  return (
    <div className="row">
      <div className="col-md-3 filter-margin">
        <label>Sort by:</label>
      </div>
      <div className="col-md-7">
        <select className="custom-select" onChange={props.onSelect}>
          {selectOption}
        </select>
      </div>
    </div>
  );
};
SelectMenu.propTypes = {
  selectOption: PropTypes.array.isRequired
};
export default SelectMenu;
