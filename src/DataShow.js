import React, { Component } from "react";

class DataShow extends Component {
  render() {
    return (
      <div className="data-container">
        <h2 className="banner">{this.props.banner}</h2>
        <div className="data-value">{this.props.data}</div>
        <span>
          <div></div>
        </span>
      </div>
    );
  }
}
export default DataShow;
