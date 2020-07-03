import React, { Component } from "react";

class Status extends Component {
  state = {};
  render() {
    let { value, threshold, banner } = this.props;
    return (
      <div className="data-container">
        <p className="banner">{banner} status</p>
        <div
          className={value > threshold ? "indicator-red" : "indicator-green"}
        ></div>
      </div>
    );
  }
}
export default Status;
