import React, { Component } from "react";
import DataShow from "./DataShow";
import firebase from "./Firebase";
import Notifier from "./Notifier";
import Status from "./Status";
import "./style.css";
import ElementStatus from "./ElementStatus";

class App extends Component {
  state = {
    temperature: 0.0,
    humidity: 0.0,
    gas: 0.0,
    flag1: 1,
    flag2: 0,
    flag3: 1
  };

  componentDidMount() {
    const getTemp = firebase.database().ref("temperature");
    const getHum = firebase.database().ref("humidity");
    const getGas = firebase.database().ref("gas");
    const getf1 = firebase.database().ref("flag1");
    const getf2 = firebase.database().ref("flag2");
    const getf3 = firebase.database().ref("flag3");
    getTemp.on("value", snapshot => {
      let newTemp = snapshot.val();
      this.setState({
        temperature: newTemp
      });
    });
    getHum.on("value", snapshot => {
      let newHum = snapshot.val();
      this.setState({
        humidity: newHum
      });
    });
    getGas.on("value", snapshot => {
      let newGas = snapshot.val();
      this.setState({
        gas: newGas
      });
    });
    getf1.on("value", snapshot => {
      let newf1 = snapshot.val();
      this.setState({
        flag1: newf1
      });
    });
    getf2.on("value", snapshot => {
      let newf2 = snapshot.val();
      this.setState({
        flag2: newf2
      });
    });
    getf3.on("value", snapshot => {
      let newf3 = snapshot.val();
      this.setState({
        flag3: newf3
      });
    });
  }

  render() {
    return (
      <div className="body">
        <h1 className="header">IOT Fire Monitoring</h1>
        <div className="main-section">
          <div className="left-section">
            <h3 className="tag-1">Meters</h3>
            <br />
            <div className="row">
              <div className="col col-lg-4">
                <DataShow banner="Temperature" data={this.state.temperature} />
              </div>
              <div className="col col-lg-4">
                <DataShow banner="Gas" data={this.state.gas} />
              </div>
              <div className="col col-lg-4">
                <DataShow banner="Humidity" data={this.state.humidity} />
              </div>
            </div>
            <br />
            <h3 className="tag-2">Status</h3>
            <div className="row">
              <div className="col col-lg-4 offset-lg-1">
                <Status
                  banner="Temperature"
                  value={this.state.temperature}
                  threshold="30"
                />
              </div>
              <div className="col col-lg-4 offset-lg-1">
                <Status banner="Gas" value={this.state.gas} threshold="600" />
              </div>
            </div>
            <br />
            <h3 className="tag-2">Indicators</h3>
            <div className="row">
              <div className="col col-lg-4">
                <ElementStatus banner="Power" flag={this.state.flag1} />
              </div>
              <div className="col col-lg-4">
                <ElementStatus banner="Sprinkler" flag={this.state.flag2} />
              </div>
              <div className="col col-lg-4">
                <ElementStatus banner="Gas" flag={this.state.flag3} />
              </div>
            </div>
          </div>
          <div className="right-section">
            <h3>Notifications</h3>
            <Notifier />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
