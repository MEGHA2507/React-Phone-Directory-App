import { createStore } from "redux";

const initalState = {
  subscribers: [],
};

function subscriberReducer(state = initalState, action) {
  switch (action.type) {
    case "SET_SUBSCRIBERS":
      return { ...state, subscribers: action.payload };
    default:
      return state;
  }
}

export default createStore(subscriberReducer);
