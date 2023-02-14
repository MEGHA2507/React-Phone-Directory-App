import React, { useState } from "react";
import Header from "./Header";
import "./AddSubscibers.css";
import { Link, useNavigate } from "react-router-dom";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

export default function AddSubscribers({ addSubscriberHandler }) {
  const [addSubscriberForm, setAddSubsciberForm] = useState({
    id: 0,
    name: "",
    phone: "",
  });

  //const history = useHistory();
  const navigate = useNavigate();

  const { name, phone } = addSubscriberForm;

  function inputChangehandler(e) {
    const state = addSubscriberForm;
    console.log(state);

    state[e.target.name] = e.target.value;
    setAddSubsciberForm({ ...state }); // we need to spread as react needs a new variable/ object.
    // setAddSubsciberForm({ ...addSubscriberForm, ...state });
    // setAddSubsciberForm({
    //   id: state["id"],
    //   name: state["name"],
    //   phone: state["phone"],
    // });
  }

  function onFormSubmitted(e) {
    e.preventDefault();
    addSubscriberHandler(addSubscriberForm);
    setAddSubsciberForm({ id: 0, name: "", phone: "" });
    //history.push("/");
    // history.goBack();
    navigate("/");
  }

  return (
    <div>
      <Header heading="Add Subscribers" />
      <div className="component-body-container">
        <Link to="/">
          <button className="custom-btn bck-btn">Back</button>
        </Link>

        <ValidatorForm className="subscriber-form" onSubmit={onFormSubmitted}>
          <TextValidator
            id="name"
            type="text"
            label="Enter Name "
            className="input-control"
            name="name"
            value={name}
            onChange={inputChangehandler}
            validators={["required"]}
            errorMessages={["Name is required"]}
          ></TextValidator>
          {/* <label htmlFor="name" className="label-control">
            Name:{" "}
          </label>
          <br />
          <input
            id="name"
            type="text"
            className="input-control"
            name="name"
            onChange={inputChangehandler}
          ></input> */}
          <br />
          <br />

          <TextValidator
            id="phone"
            type="text"
            className="input-control"
            name="phone"
            onChange={inputChangehandler}
            label="Enter Phone "
            value={phone}
            validators={["required"]}
            errorMessages={["Phone is required"]}
          ></TextValidator>

          {/* <label htmlFor="phone" className="label-control">
            Phone:{" "}
          </label>
          <br />
          <input
            id="phone"
            type="text"
            className="input-control"
            name="phone"
            onChange={inputChangehandler}
          ></input> */}
          <br />
          <br />

          <div className="subscriber-info-container">
            <span className="subscriber-to-add-heading">
              Subscriber to be added:
            </span>
            <br />
            <span className="subscriber-info">Name: {name}</span>
            <br />
            <span className="subsciber-info">Phone: {phone}</span>
          </div>

          <button type="submit" className="custom-btn add-btn">
            Add
          </button>
        </ValidatorForm>
      </div>
    </div>
  );
}

// class AddSubscribers extends Component {
//   constructor() {
//     super();
//     this.state = {
//       id: 0,
//       name: "",
//       phone: "",
//     };

//     console.log(this.state);
//   }

//   inputChangehandler = (e) => {
//     const state = this.state;
//     console.log(state);

//     state[e.target.name] = e.target.value;
//     this.setState(state);
//     console.log(this.state);
//   };

//   onFormSubmitted = (e) => {
//     e.preventDefault();
//     this.props.addSubscriberHandler(this.state);
//     this.setState({ id: 0, name: "", phone: "" });
//   };

//   render() {
//     const { name, phone } = this.state;

//     return (
//       <div>
//         <Header heading="Add Subscribers" />
//         <div className="component-body-container">
//           <Link to="/">
//             <button className="custom-btn bck-btn">Back</button>
//           </Link>

//           <form
//             className="subscriber-form"
//             onSubmit={this.onFormSubmitted.bind(this)}
//           >
//             <label htmlFor="name" className="label-control">
//               Name:{" "}
//             </label>
//             <br />
//             <input
//               id="name"
//               type="text"
//               className="input-control"
//               name="name"
//               onChange={this.inputChangehandler}
//             ></input>
//             <br />
//             <br />

//             <label htmlFor="phone" className="label-control">
//               Phone:{" "}
//             </label>
//             <br />
//             <input
//               id="phone"
//               type="text"
//               className="input-control"
//               name="phone"
//               onChange={this.inputChangehandler}
//             ></input>
//             <br />
//             <br />

//             <div className="subscriber-info-container">
//               <span className="subscriber-to-add-heading">
//                 Subscriber to be added:
//               </span>
//               <br />
//               <span className="subscriber-info">
//                 Name: {name} {this.state.name}
//               </span>
//               <br />
//               <span className="subsciber-info">
//                 Phone: {phone} {this.state.phone}
//               </span>
//             </div>

//             <button type="submit" className="custom-btn add-btn">
//               Add
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default AddSubscribers;
