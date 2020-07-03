import React, { Component } from "react";

class ElementStatus extends Component {
  state = {};
  render() {
    return (
      <div className="data-container">
        <h3 className="banner">{this.props.banner}</h3>
        <div className="data-value">
          <div
            className={
              this.props.flag === 1 ? "indicator-green" : "indicator-red"
            }
          ></div>
        </div>
      </div>
    );
  }
}
export default ElementStatus;
