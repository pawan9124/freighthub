import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllShipment } from "../../actions/shipmentsActions";
import SearchBox from "../Common/SearchBox";
import ShipmentTable from "../Common/ShipmentTable";
import SelectMenu from "../Common/SelectMenu";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shipmentData: [],
      selectMenu: [
        "id",
        "name",
        "mode",
        "type",
        "destination",
        "origin",
        "status"
      ]
    };
    this.findShipmentDetailById = this.findShipmentDetailById.bind(this);
    this.sortingTheShipments = this.sortingTheShipments.bind(this);
    this.reset = this.reset.bind(this);
  }
  componentDidMount() {
    this.props.fetchAllShipment();
  }

  findShipmentDetailById(id) {
    const shippedData = this.props.shipment.allShipment.filter(data => {
      if (data.id === id) {
        return true;
      }
      return false;
    });
    this.setState({ shipmentData: shippedData });
  }

  sortingTheShipments(key) {
    key = key.target.value;
    this.props.shipment.allShipment.sort(function(a, b) {
      return a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0;
    });
    const newData = this.props.shipment.allShipment.map(d => ({
      ...d,
      x: "nodata"
    }));

    this.setState({ shipmentData: newData });
  }
  reset() {
    this.setState({ shipmentData: [] });
  }

  render() {
    let { allShipment } = this.props.shipment;
    if (this.state.shipmentData.length > 0) {
      allShipment = this.state.shipmentData;
    }

    return (
      <div className="home-page">
        <div className="card">
          <div className="card-header">Shipment Details</div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-8">
                <SearchBox
                  placeholder="Search Shipment Id"
                  label="Search Shipment by Id:"
                  findShipmentDetailById={this.findShipmentDetailById}
                  reset={this.reset}
                />
              </div>
              <div className="col-md-4 mgb-10">
                <SelectMenu
                  selectOption={this.state.selectMenu}
                  onSelect={this.sortingTheShipments}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <ShipmentTable data={allShipment} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  fetchAllShipment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  shipment: state.shipment
});

export default connect(
  mapStateToProps,
  { fetchAllShipment }
)(Home);
