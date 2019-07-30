import React from "react";
import { Link } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="neon-bg">
          <h1 className="neon" data-text="FreightHub Shipment]">
            <Link to="/">FreightHub Shipment</Link>
          </h1>
        </div>
        <div className="overlay" />
      </header>
    );
  }
}

export default Header;
