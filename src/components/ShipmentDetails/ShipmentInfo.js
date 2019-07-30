import React from "react";
import PropTypes from "prop-types";

const ShipmentInfo = props => {
  return (
    <div className="card mb-3 shipment-cards">
      <div className="row no-gutters">
        <div className="col-md-4">
          <i className={props.image} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
ShipmentInfo.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
export default ShipmentInfo;
