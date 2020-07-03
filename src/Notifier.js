import React, { Component } from "react";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";

class Notifier extends Component {
  state = {};
  render() {
    return (
      <div>
        <ReactNotification />
        <Home />
      </div>
    );
  }
}

function Home() {
  const handleOnClickDefault = () => {
    store.addNotification({
      title: "New Card Added",
      message: "Tom added the card",
      type: "success",
      container: "top-right",
      insert: "top"
    });
  };
  return (
    <div>
      <button onClick={handleOnClickDefault}>Default</button>
    </div>
  );
}
export default Notifier;
