// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/
import { createStore } from "redux";
import faker from "faker";

// \/ All of your javascript should go here \/

const limit = 5;
//Reducer
function appReducer(state = { items: [] }, action) {
  switch (action.type) {
    case "items/add":
      return {
        ...state,
        items: [...state.items, action.payload.text],
      };

    default:
      return state;
  }
}

const renderList = (list) => {
  document.querySelector("ul").innerHTML = list
    .map((item) => {
      return `<li>${item}</li>`;
    })
    .join("");
};

const store = createStore(appReducer);
console.log(store.getState());
document.querySelector("h1").innerText = !store.getState().items.length
  ? "No items"
  : store.getState().items.length;
renderList(store.getState().items);

const unsubscribe = store.subscribe(() => {
  const state = store.getState();

  document.querySelector("h1").innerText = state.items.length;

  renderList(store.getState().items);

  if (state.items.length >= limit) {
    clearInterval(interval);
  }
  if (state.items.length >= limit * 2) {
    unsubscribe();
    document.querySelector("button").removeEventListener("click", clickHandler);
  }
});

const interval = setInterval(() => {
  store.dispatch({
    type: "items/add",
    payload: { text: faker.lorem.sentence() },
  });
}, 1000);

const clickHandler = () => {
  store.dispatch({
    type: "items/add",
    payload: { text: faker.lorem.sentence() },
  });
};

document.querySelector("button").addEventListener("click", clickHandler);

// function counter(
//   state = {
//     counter: 0,
//     payload: { text: "" },
//   },
//   action
// ) {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         ...state,
//         counter: state.counter + 1,
//         payload: { text: faker.lorem.sentence() },
//       };
//     default:
//       return state;
//   }
// }

// let store = createStore(counter);
// console.log(store.getState());

// const interval = setInterval(() => {
//   store.dispatch({
//     type: "INCREMENT",
//   });
// }, 1000);

// const unsubscribeFunc = store.subscribe(() => {
//   document.querySelector("h1").innerText = store.getState().counter;
//   const sentence = document.createElement("li");
//   sentence.innerHTML = store.getState().payload.text;
//   document.querySelector("ul").appendChild(sentence);
//   if (store.getState().counter >= 5) {
//     clearInterval(interval);
//   }
// });

// document.querySelector("button").addEventListener("click", () => {
//   store.dispatch({
//     type: "INCREMENT",
//   });
//   if (store.getState().counter >= 10) {
//     unsubscribeFunc();
//   }
// });