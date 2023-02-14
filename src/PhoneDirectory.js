// import React, { Component } from "react";
import React, {
  Fragment,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import AddSubscribers from "./AddSubscribers";
import ShowSubscribers from "./ShowSubscribers";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import { SubscriberCountContext } from "./SubscriberCountContext";

export default function PhoneDirectory() {
  const [subscribersList, setSubscriberList] = useState([]);
  //   [
  //   { id: 1, name: "Megha Banerjee", phone: "99999999999" },
  //   { id: 2, name: "Medha Banerjee", phone: "99673847799" },
  // ]

  // function loadData() {
  //   fetch("http://localhost:7081/contacts")
  //     .then((input) => input.json())
  //     .then((list) => setSubscriberList(list));
  // }

  async function loadData() {
    const response = await fetch("http://localhost:7081/contacts");
    const data = await response.json();
    setSubscriberList(data);
  }

  useEffect(() => {
    console.log(loadData());
  }, []);

  // function deleteSubscriberHandler(subscriberID) {
  //   // const newSubscribers = subscribersList.filter(
  //   //   (sub) => sub.id !== subscriberID
  //   // );
  //   // in react always use filter to remove the element , splice updates the initial array due to which inital array also updates ,
  //   // React checks with Object.is() to see if 2 arrays are equal or not
  //   // newSubscribers.splice(subscriberIndex, 1);
  //   // this.setState({ subscribers: newSubscribers });

  //   // setSubscriberList(newSubscribers);
  //   // console.log(newSubscribers);

  //   fetch("http://localhost:7081/api/contacts/" + subscriberID, {
  //     method: "DELETE",
  //   })
  //     .then((input) => input.json())
  //     .then((data) => {
  //       loadData();
  //     });
  // }

  // async function deleteSubscriberHandler(subscriberID) {
  //   const response = await fetch(
  //     "http://localhost:7081/api/contacts/" + subscriberID,
  //     {
  //       method: "DELETE",
  //     }
  //   );
  //   const data = await response.json();

  //   loadData();
  // }

  const deleteSubscriberHandler = useCallback(async (subscriberID) => {
    const response = await fetch(
      "http://localhost:7081/api/contacts/" + subscriberID,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();

    loadData();
  }, []);

  const numberOfSubscriptions = useMemo(() => {
    return subscribersList.length;
  }, [subscribersList]);

  async function addSubscriber(newSubscriber) {
    // let subscriberList = subscribersList;
    // if (subscriberList.length > 0) {
    //   newSubscriber.id = subscriberList[subscriberList.length - 1].id + 1;
    // } else {
    //   newSubscriber.id = 1;
    // }

    // subscriberList.push(newSubscriber);
    // // this.setState({ subscriberList: subscriberList });
    // setSubscriberList(subscriberList);

    // console.log(subscriberList);

    const response = await fetch("http://localhost:7081/api/contacts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSubscriber),
    });

    const data = await response.json();

    loadData();
  }

  return (
    <Fragment>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ShowSubscribers
              subscriberList={subscribersList}
              deleteSubscriberHandler={(subscriberId) =>
                deleteSubscriberHandler(subscriberId)
              }
            />
          }
        ></Route>

        <Route
          exact
          path="/add"
          element={
            <AddSubscribers
              addSubscriberHandler={(newSubscriber) =>
                addSubscriber(newSubscriber)
              }
            />
          }
        ></Route>
      </Routes>
      <SubscriberCountContext.Provider value={numberOfSubscriptions}>
        <Footer></Footer>
      </SubscriberCountContext.Provider>
    </Fragment>
  );
}

// class PhoneDirectory extends Component {
//   constructor() {
//     super();

//     this.state = {
//       subscriberList: [
//         { id: 1, name: "Megha Banerjee", phone: "99999999999" },
//         { id: 2, name: "Medha Banerjee", phone: "99673847799" },
//       ],
//     };
//   }

//   addSubscriber = (newSubscriber) => {
//     let subscriberList = this.state.subscriberList;
//     if (subscriberList.length > 0) {
//       newSubscriber.id = subscriberList[subscriberList.length - 1].id + 1;
//     } else {
//       newSubscriber.id = 1;
//     }

//     subscriberList.push(newSubscriber);
//     this.setState({ subscriberList: subscriberList });

//     console.log(this.state);
//   };

//   deleteSubscriberHandler = (subscriberID) => {
//     let subscriberList = this.state.subscriberList;
//     let subscriberIndex = 0;

//     subscriberList.forEach(function (subsciber, index) {
//       if (subsciber.id === subscriberID) {
//         subscriberIndex = index;
//       }
//     }, this);

//     let newSubscribers = subscriberList;
//     newSubscribers.splice(subscriberIndex, 1);
//     this.setState({ subscribers: newSubscribers });
//   };

//   render() {
//     return (
//       <Routes>
//         <Route
//           exact
//           path="/"
//           element={
//             <ShowSubscribers
//               subscriberList={this.state.subscriberList}
//               deleteSubscriberHandler={this.deleteSubscriberHandler}
//             />
//           }
//         ></Route>

//         <Route
//           exact
//           path="/add"
//           element={<AddSubscribers addSubscriberHandler={this.addSubscriber} />}
//         ></Route>
//       </Routes>
//     );
//   }
// }

// export default PhoneDirectory;
