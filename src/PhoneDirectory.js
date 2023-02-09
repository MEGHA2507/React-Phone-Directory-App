import React, { Component } from "react";
import AddSubscribers from "./AddSubscribers";
import ShowSubscribers from "./ShowSubscribers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class PhoneDirectory extends Component {
  constructor() {
    super();

    this.state = {
      subscriberList: [
        { id: 1, name: "Megha Banerjee", phone: "99999999999" },
        { id: 2, name: "Medha Banerjee", phone: "99673847799" },
      ],
    };
  }

  addSubscriber = (newSubscriber) => {
    let subscriberList = this.state.subscriberList;
    if (subscriberList.length > 0) {
      newSubscriber.id = subscriberList[subscriberList.length - 1].id + 1;
    } else {
      newSubscriber.id = 1;
    }

    subscriberList.push(newSubscriber);
    this.setState({ subscriberList: subscriberList });

    console.log(this.state);
  };

  deleteSubscriberHandler = (subscriberID) => {
    let subscriberList = this.state.subscriberList;
    let subscriberIndex = 0;

    subscriberList.forEach(function (subsciber, index) {
      if (subsciber.id === subscriberID) {
        subscriberIndex = index;
      }
    }, this);

    let newSubscribers = subscriberList;
    newSubscribers.splice(subscriberIndex, 1);
    this.setState({ subscribers: newSubscribers });
  };

  render() {
    return (
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ShowSubscribers
              subscriberList={this.state.subscriberList}
              deleteSubscriberHandler={this.deleteSubscriberHandler}
            />
          }
        ></Route>

        <Route
          exact
          path="/add"
          element={<AddSubscribers addSubscriberHandler={this.addSubscriber} />}
        ></Route>
      </Routes>
    );
  }
}

export default PhoneDirectory;
