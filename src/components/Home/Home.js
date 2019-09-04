import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllShipment } from "../../actions/shipmentsActions";
import ShipmentTable from "../Common/ShipmentTable";
import SelectMenu from "../Common/SelectMenu";
import MediaCard from "../Common/MediaCard";
import InputBox from "../Common/InputBox";
import CircleButton from "../Common/CircleButton";
import Navigation from "../Common/Navigation";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchId: "",
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
    this.onChangeText = this.onChangeText.bind(this);
    this.reset = this.reset.bind(this);
  }
  componentDidMount() {
    this.props.fetchAllShipment();
  }
  onChangeText(e) {
    console.log("targetName", e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  findShipmentDetailById(id) {
    console.log("ID", this.state.searchId);
    const shippedData = this.props.shipment.allShipment.filter(data => {
      if (data.id === this.state.searchId) {
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
        <Navigation
          navList={[
            { name: "Shipment", link: "/dashboard" },
            { name: "About", link: "/" },
            { name: "Career", link: "/" },
            { name: "News", link: "/" }
          ]}
          liClass={"dark-li-class"}
          modeClass={"dark-nav"}
        />
        <div className="row margin-top-15">
          <div className="col-md-6">
            <MediaCard
              media={`<i class="far fa-user-circle common-icon-sm"></i>`}
              text={`<p class="media-card-text">Donald  Trump</p>`}
              parentCustomCss="user-card-parent"
              mediaCustomCss="user-card-media"
              textCustomCss="user-card-text"
            />
          </div>
          <div className="col-md-6 float">
            <MediaCard
              media={``}
              text={`
              <ul class="info-ul-list">
              <li>Instruction:</li>
              <li>Search by Shipment Id</li>
              <li>Sort and view details </li>
              </ul>`}
              parentCustomCss="info-card-parent"
              mediaCustomCss=""
              textCustomCss="info-card-text "
            />
          </div>
        </div>
        <div className="row margin-top-3-per search-panel-parent">
          <div className="col-md-4 search-panel-child">
            <InputBox
              inputType="text"
              inputName="searchId"
              placeholder="Search Shipment Id"
              className="search-id-box"
              onChangeText={this.onChangeText}
              value=""
            />
          </div>
          <div className="col-md-1 search-panel-child">
            <CircleButton
              className="circle-button-primary"
              btnClick={this.findShipmentDetailById}
              icon="fas fa-search"
            />
          </div>
          <div className="col-md-1 search-panel-child">
            <CircleButton
              className="circle-button-primary"
              btnClick={this.reset}
              icon="fas fa-history"
            />
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4 mgb-10 search-panel-child">
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
