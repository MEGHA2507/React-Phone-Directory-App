import React, { Component } from "react";
import Header from "./Header";
import "./AddSubscibers.css";
import { Link } from "react-router-dom";

class AddSubscribers extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: "",
      phone: "",
    };

    console.log(this.state);
  }

  inputChangehandler = (e) => {
    const state = this.state;
    console.log(state);

    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log(this.state);
  };

  onFormSubmitted = (e) => {
    e.preventDefault();
    this.props.addSubscriberHandler(this.state);
    this.setState({ id: 0, name: "", phone: "" });
  };

  render() {
    const { name, phone } = this.state;

    return (
      <div>
        <Header heading="Add Subscribers" />
        <div className="component-body-container">
          <Link to="/">
            <button className="custom-btn bck-btn">Back</button>
          </Link>

          <form
            className="subscriber-form"
            onSubmit={this.onFormSubmitted.bind(this)}
          >
            <label htmlFor="name" className="label-control">
              Name:{" "}
            </label>
            <br />
            <input
              id="name"
              type="text"
              className="input-control"
              name="name"
              onChange={this.inputChangehandler}
            ></input>
            <br />
            <br />

            <label htmlFor="phone" className="label-control">
              Phone:{" "}
            </label>
            <br />
            <input
              id="phone"
              type="text"
              className="input-control"
              name="phone"
              onChange={this.inputChangehandler}
            ></input>
            <br />
            <br />

            <div className="subscriber-info-container">
              <span className="subscriber-to-add-heading">
                Subscriber to be added:
              </span>
              <br />
              <span className="subscriber-info">
                Name: {name} {this.state.name}
              </span>
              <br />
              <span className="subsciber-info">
                Phone: {phone} {this.state.phone}
              </span>
            </div>

            <button type="submit" className="custom-btn add-btn">
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddSubscribers;
