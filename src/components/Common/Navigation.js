import React from "react";
import Button from "../Common/Button";
import { Link } from "react-router-dom";
import "../../scripts/scripts";

function handleJoinUs() {
  console.log("CLicked Handle Join Us");
}

class Navigation extends React.Component {
  render() {
    const listItem = this.props.navList.map((data, index) => {
      return (
        <li key={"navlist" + index} className={this.props.liClass}>
          <Link to={data.link}>{data.name}</Link>
        </li>
      );
    });
    return (
      <nav className={` ${this.props.modeClass} navbar`}>
        <div className="nav-child">
          <h1>
            <Link to={"/"}>Frieghthub</Link>
          </h1>
        </div>
        <div className="nav-child">
          <ul>{listItem}</ul>
        </div>
        <div className="nav-child">
          <Button buttonName="Join Us" btnClick={handleJoinUs} />
        </div>
      </nav>
    );
  }
}

export default Navigation;
