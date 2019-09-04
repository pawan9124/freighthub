import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchSingleShipment,
  postShipmentName
} from "../../actions/shipmentsActions";
import ShipmentName from "./ShipmentName";
import ShipmentInfo from "./ShipmentInfo";
import ShipmentCargo from "./ShipmentCargo";
import PropTypes from "prop-types";
import MediaCard from "../Common/MediaCard";
import InputBox from "../Common/InputBox";
import Button from "../Common/Button";
import Navigation from "../Common/Navigation";

class ShipmentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabledMode: true,
      name: "",
      isError: false,
      isChanged: false,
      id: ""
    };
    this.onChange = this.onChange.bind(this);
    this.setEnableMode = this.setEnableMode.bind(this);
    this.saveName = this.saveName.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  componentWillMount() {
    if (this.props.match.params.id) {
      this.props.fetchSingleShipment(this.props.match.params.id);
    }
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      isChanged: true,
      isError: false
    });
  }
  setEnableMode() {
    this.setState({ disabledMode: !this.state.disabledMode });
  }
  saveName() {
    if (this.state.name != "" && this.state.name != undefined) {
      const sendData = this.props.shipment.singleShipment;
      sendData.name = this.state.name;
      this.props.postShipmentName(sendData);
      this.setState({ disabledMode: true });
    } else {
      this.setState({ isError: true });
    }
  }

  handleOnClick(e) {}
  render() {
    const { singleShipment } = this.props.shipment;
    let { disabledMode, name, isChanged, isError } = this.state;
    if (name === "" && isChanged === false) {
      name = singleShipment.name;
    }
    console.log("Props.", this.props);
    return (
      <div className="shipment-detail">
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
        <div className="row  margin-top-15">
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
              <li>View Details of Shipment Id</li>
              <li>Edit the shipment Name</li>
              </ul>`}
              parentCustomCss="info-card-parent"
              mediaCustomCss=""
              textCustomCss="info-card-text "
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 shipment-info-parent">
            <div className="shipment-info-child">
              <p className="shipment-info-heading">Shipment ID:</p>
              <p>{this.props.match.params.id}</p>
            </div>
            <div className="shipment-info-child">
              <p className="shipment-info-heading">Shipment Name:</p>
              <div className="shipment-name-button-container">
                <div className="shipment-input-box">
                  <InputBox
                    inputType="text"
                    inputName="shipmentName"
                    placeholder="Shipment Name"
                    className="shipment-name form-control"
                    onChangeText={this.onChangeText}
                    value={name || ""}
                    disabledMode={disabledMode}
                    isError={isError}
                  />
                </div>
                {disabledMode ? (
                  <Button btnClick={this.setEnableMode} buttonName={"Edit"} />
                ) : (
                  <div className="save-button-group">
                    <Button btnClick={this.saveName} buttonName={"Save"} />
                    <Button
                      btnClick={this.setEnableMode}
                      buttonName={"cancel"}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="shipment-info-child">
              <p className="shipment-info-heading">Status:</p>
              <a href="#" className="status-code">
                {singleShipment.status}
              </a>
            </div>
          </div>
        </div>
        <div className="shipment-information">
          <div className="row">
            <div className="col-md-4">
              <MediaCard
                media={`<i class="fas fa-plane-departure custom-font-size"></i>`}
                text={`<div class="media-card-text"><h3>Origin</h3><span>${singleShipment.origin}</span></div>`}
                parentCustomCss="user-card-parent-details"
                mediaCustomCss="user-card-media-details"
                textCustomCss="user-card-text-details"
              />
            </div>
            <div className="col-md-4">
              <MediaCard
                media={`<i class="fas fa-plane-arrival custom-font-size"></i>`}
                text={`<div class="media-card-text"><h3>Destination</h3><span>${singleShipment.destination}</span></div>`}
                parentCustomCss="user-card-parent-details"
                mediaCustomCss="user-card-media-details"
                textCustomCss="user-card-text-details"
              />
            </div>
            <div className="col-md-4">
              <MediaCard
                media={`<i class="fas fa-question-circle custom-font-size"></i>`}
                text={`<div class="media-card-text"><h3>Type</h3><span>${singleShipment.type}</span></div>`}
                parentCustomCss="user-card-parent-details"
                mediaCustomCss="user-card-media-details"
                textCustomCss="user-card-text-details"
              />
            </div>
          </div>
          <div className="row margin-top-15">
            <div className="col-md-4">
              <MediaCard
                media={`<i class="fas fa-ship custom-font-size"></i>`}
                text={`<div class="media-card-text"><h3>Mode</h3><span>${singleShipment.mode}</span></div>`}
                parentCustomCss="user-card-parent-details"
                mediaCustomCss="user-card-media-details"
                textCustomCss="user-card-text-details"
              />
            </div>
            <div className="col-md-4">
              <MediaCard
                media={`<i class="fas fa-sitemap custom-font-size"></i>`}
                text={`<div class="media-card-text"><h3>Total</h3><span>${singleShipment.total}</span></div>`}
                parentCustomCss="user-card-parent-details"
                mediaCustomCss="user-card-media-details"
                textCustomCss="user-card-text-details"
              />
            </div>
          </div>
        </div>
        <div className="row margin-0">
          <div className="col-md-12">
            <ShipmentCargo
              cargo={singleShipment.cargo}
              services={singleShipment.services}
            />
          </div>
        </div>
      </div>
    );
  }
}

ShipmentContainer.propTypes = {
  fetchSingleShipment: PropTypes.func.isRequired,
  postShipmentName: PropTypes.func.isRequired,
  shipment: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  shipment: state.shipment
});
export default connect(
  mapStateToProps,
  { fetchSingleShipment, postShipmentName }
)(ShipmentContainer);
