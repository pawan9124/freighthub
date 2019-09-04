import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchSingleShipment } from "../../actions/shipmentsActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import callPagination from "../../scripts/pagination";

class ShipmentTable extends Component {
  componentDidUpdate() {
    callPagination();
  }
  viewShipmentDetails(id) {
    this.props.fetchSingleShipment(id);
  }

  render() {
    let shipmentCol = this.props.data.map((data, index) => {
      return (
        <tr key={"table-front" + index}>
          <th scope="row">{++index}</th>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.origin}</td>
          <td>{data.destination}</td>
          <td>{data.mode}</td>
          <td>{data.type}</td>
          <td>{data.status}</td>
          <td>
            <Link
              onClick={this.viewShipmentDetails.bind(this, data.id)}
              to={`/shipment/${data.id}`}
              className="btn btn-primary-custom btn-md"
            >
              View
            </Link>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <table
          className="table table-responsive"
          id="shipmentTable"
          data-show-header="true"
          data-pagination="true"
          data-id-field="name"
          data-page-list="[5, 10, 25, 50, 100, ALL]"
          data-page-size="2"
        >
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Shipment Id</th>
              <th scope="col">Name</th>
              <th scope="col">Origin</th>
              <th scope="col">Destination</th>
              <th scope="col">Mode</th>
              <th scope="col">Type</th>
              <th scope="col">Status</th>
              <th scope="col">View/Edit</th>
            </tr>
          </thead>
          <tbody>{shipmentCol}</tbody>
        </table>
      </div>
    );
  }
}
ShipmentTable.propTypes = {
  data: PropTypes.array.isRequired
};
export default connect(
  null,
  { fetchSingleShipment }
)(ShipmentTable);
