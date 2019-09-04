import React, { Component } from "react";
import Button from "../Common/Button";
import InputBox from "../Common/InputBox";
import { withRouter } from "react-router";

class SignUpBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNo: ""
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleOnClick(e) {
    const { history } = this.props;
    history.push("/dashboard");
  }

  render() {
    return (
      <div className="signup-box">
        <div className="signup-box-child">
          <span>
            <h4>
              <a href className="singup-box-active">
                SignIn
              </a>
            </h4>
          </span>
          <span>
            <h4>
              <a href>SignUp</a>
            </h4>
          </span>
        </div>
        <div className="signup-box-child">
          <InputBox
            inputType="number"
            inputName="mobileNo"
            placeholder="Please Enter Your Mobile Number"
            className="signup-input-box"
            onChangeText={this.handleOnChange}
          />
        </div>
        <div className="signup-box-child button-singup">
          <Button buttonName="SingIn" btnClick={this.handleOnClick} />
        </div>
      </div>
    );
  }
}

export default withRouter(SignUpBox);
