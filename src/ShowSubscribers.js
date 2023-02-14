import React, { useEffect } from "react";
import Header from "./Header";
import "./ShowSubscribers.css";
import { Link } from "react-router-dom";

export default function ShowSubscribers({
  subscriberList,
  deleteSubscriberHandler,
}) {
  useEffect(() => {
    if (subscriberList && subscriberList.length) {
      document.title =
        "Phone Directory - Number of Subscribers " + subscriberList.length;
    }
  }, [subscriberList]);

  // function onDeleteClick(subscriberID) {
  //   props.deleteSubscriberHandler(subscriberID);
  // }

  return (
    <div>
      <Header heading="Phone Directory" />
      <div className="add-directory-conatiner">
        <Link to="/add">
          <button className="add-btn">Add</button>
        </Link>

        <div className="table-header">
          <span className="label h-label">Name</span>
          {/* <br /> */}
          <span className="label h-label">Phone</span>
        </div>
        {subscriberList.map((sub) => {
          return (
            <div className="table-header" key={sub.id}>
              <span className="label">{sub.name}</span>
              {/* <br /> */}
              <span className="label">{sub.phone}</span>

              <button
                className="delete-btn"
                onClick={() => deleteSubscriberHandler(sub.id)}
              >
                Delete
              </button>
            </div>
          );
        })}
        {/* <div className="table-header">
          <span className="label">Shilpa</span>
          
          <span className="label">9999999999</span>
        </div>

        <div className="table-header">
          <span className="label">Megha</span>
        
          <span className="label">5555555555</span>
        </div> */}

        {/* <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Type Here"
          defaultValue={x + y}
        ></input> */}
      </div>
    </div>

    // <div id="module">
    //   <p>React JS</p>
    // </div>

    // React.createElement(
    //   "div",
    //   { id: "module" },
    //   React.createElement("p", null, "React JS")
    // )
  );
}

// function App() {
// class ShowSubscribers extends Component {
//   // let x = 1;
//   // let y = 3;
//   // let subscribers = [
//   //   {
//   //     id: 1,
//   //     name: "Shilpa",
//   //     phone: "9999999999",
//   //   },
//   //   {
//   //     id: 2,
//   //     name: "Sristhi",
//   //     phone: "9998888899",
//   //   },
//   // ];

//   // constructor() {
//   //   super();
//   //   this.state = {
//   //     showSubscribersList: [],
//   //   };
//   // }

//   // clickHandler(message) {
//   //   alert(message);
//   // }

//   // componentDidMount() {
//   //   let newSubscriber = {
//   //     id: 1,
//   //     name: "Shilpa Bhat",
//   //     phone: "99999999999",
//   //   };

//   //   let subscriberList = this.state.showSubscribersList;
//   //   subscriberList.push(newSubscriber);
//   //   this.setState({ showSubscribersList: subscriberList });
//   // }

//   onDeleteClick = (subscriberID) => {
//     this.props.deleteSubscriberHandler(subscriberID);
//   };

//   render() {
//     return (
//       <div>
//         <Header heading="Phone Directory" />
//         <div className="add-directory-conatiner">
//           <Link to="/add">
//             <button className="add-btn">Add</button>
//             {/* <button
//               className="add-btn"
//               onClick={this.clickHandler.bind(this, "Add Clicked")}
//             >
//               Add
//             </button> */}
//           </Link>

//           <div className="table-header">
//             <span className="label h-label">Name</span>
//             {/* <br /> */}
//             <span className="label h-label">Phone</span>
//           </div>
//           {this.props.subscriberList.map((sub) => {
//             return (
//               <div className="table-header" key={sub.id}>
//                 <span className="label">{sub.name}</span>
//                 {/* <br /> */}
//                 <span className="label">{sub.phone}</span>

//                 <button
//                   className="delete-btn"
//                   onClick={this.onDeleteClick.bind(this, sub.id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             );
//           })}
//           {/* <div className="table-header">
//             <span className="label">Shilpa</span>

//             <span className="label">9999999999</span>
//           </div>

//           <div className="table-header">
//             <span className="label">Megha</span>

//             <span className="label">5555555555</span>
//           </div> */}

//           {/* <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             placeholder="Type Here"
//             defaultValue={x + y}
//           ></input> */}
//         </div>
//       </div>

//       // <div id="module">
//       //   <p>React JS</p>
//       // </div>

//       // React.createElement(
//       //   "div",
//       //   { id: "module" },
//       //   React.createElement("p", null, "React JS")
//       // )
//     );
//   }
// }

// export default ShowSubscribers;
