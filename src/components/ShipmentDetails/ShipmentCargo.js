import React from "react";

function toggleTab(type) {
  const cargo = document.querySelector(".cargo");
  const services = document.querySelector(".services");
  const cargoTable = document.querySelector(".cargo-table");
  const servicesTable = document.querySelector(".services-table");
  if (type === "services") {
    cargo.classList.remove("active");
    services.classList.add("active");
    cargoTable.style.display = "none";
    servicesTable.style.display = "inline-table";
  } else {
    services.classList.remove("active");
    cargo.classList.add("active");
    cargoTable.style.display = "inline-table";
    servicesTable.style.display = "none";
  }
}

const ShipmentCargo = props => {
  let servicesDetails;
  let cargoDetails;
  if (props.cargo != undefined) {
    cargoDetails = props.cargo.map((data, index) => {
      return (
        <tr key={"cargo" + index}>
          <th scope="row">{++index}</th>
          <td>{data.type}</td>
          <td>{data.description}</td>
          <td>{data.volume}</td>
        </tr>
      );
    });
  }
  if (props.services != undefined) {
    servicesDetails = props.services.map((data, index) => {
      return (
        <tr key={"services" + index}>
          <th scope="row">{++index}</th>
          <td>{data.type}</td>
          <td>{data.value}</td>
        </tr>
      );
    });
  }
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card text-center">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item" onClick={() => toggleTab("cargo")}>
                <a className="nav-link cargo  active">Cargo</a>
              </li>
              <li className="nav-item" onClick={() => toggleTab("services")}>
                <a className="nav-link services">Services</a>
              </li>
            </ul>
          </div>
          <div className="card-body cargo-details">
            <table className="table table-bordered cargo-table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Type</th>
                  <th scope="col">Description</th>
                  <th scope="col">Volume</th>
                </tr>
              </thead>
              <tbody>{cargoDetails}</tbody>
            </table>
          </div>
          <div className="card-body services-details">
            <table className="table table-bordered services-table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Type</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tbody>{servicesDetails}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShipmentCargo;
