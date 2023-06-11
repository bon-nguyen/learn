const { createStore } = require("redux");

const initState = {
  speed: 0,
  lastSpeed: 1,
};

const actions = [
  { type: "CHANGE_TYPE", payload: 3 },
  { type: "TURN_ON" },
  { type: "TURN_OFF" },
];

const reducer = (state = initState, action) => {
  if (action.type === "CHANGE_TYPE") {
    return {
      ...state,
      speed: action.payload,
    };
  }
  if (action.type === "TURN_ON") {
    return {
      ...state,
      lastSpeed: state.speed,
    };
  }

  if (action.type === "TURN_OFF") {
    return {
      ...state,
      speed: 0,
      lastSpeed: state.speed,
    };
  }
  return state;
};

const store = createStore(reducer);
console.log("store", store);
console.log(store.getState());

// function reducer(arr, callback, initialValue) {
//   if (initialValue === undefined) {
//     initialValue = arr[0];
//     arr.slice(1);
//   }

//   for (const item of arr) {
//     initialValue = callback(initialValue, item);
//   }
//   return initialValue;
// }

// const initialValue = {
//   speed: 0,
//   lastSpeed: 1,
// };

// const actions = [
//   { type: "CHANGE_TYPE", payload: 3 },
//   { type: "TURN_ON" },
//   { type: "TURN_OFF" },
// ];

// const a = reducer(
//   actions,
//   (state, action) => {
//     if (action.type === "CHANGE_TYPE") {
//       return {
//         ...state,
//         speed: action.payload,
//       };
//     }
//     if (action.type === "TURN_ON") {
//       return {
//         ...state,
//         lastSpeed: state.speed,
//       };
//     }

//     if (action.type === "TURN_OFF") {
//       return {
//         ...state,
//         speed: 0,
//         lastSpeed: state.speed,
//       };
//     }
//   },
//   initialValue
// );

// console.log("aaa", a);
