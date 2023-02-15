import React, { Component, Fragment, useEffect, useState } from "react";
import "./Header.css";
import { downloadLocationDetail, useLocationDetails } from "./customhook";

const Header = function (props) {
  //   const headerStyle = {
  //     textAlign: "center",
  //     padding: 20,
  //     background: "#000",
  //     color: "#fff",
  //     textTransform: "uppercase",
  //   };

  const locationDetails = useLocationDetails();

  const { city, region, country } = locationDetails;
  return (
    // <div className="header" style={headerStyle}>
    //   Phone Directory
    // </div>
    // <div className="header">Phone Directory</div>
    <Fragment>
      <div className="header">{props.heading}</div>
      <h4>
        {" "}
        Welcome user , You are from {city} - {region} on {country}
      </h4>
    </Fragment>
  );
};

// class Header extends Component {
//   render() {
//     return (
//       <Fragment>
//         <div className="header">{this.props.heading}</div>
//         <h4> Welcome user , You are from city - region on country_name</h4>
//       </Fragment>
//     );
//   }
// }

export default Header;
