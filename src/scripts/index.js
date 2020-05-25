import '../styles/main.scss';
import { createStore } from 'redux'

function counter (state = [], action) {
    switch(action.type) {
        case "ADD":
            state.push("ok");
            return state;
        default: 
            return state
            }
}

let store = createStore(counter);

document.querySelector(".container").innerHTML = "no Items";

store.subscribe(() => {

   if(store.getState().length <6){
    document.querySelector(".container").innerHTML = store.getState();
}}
)
  
store.dispatch({type:"ADD"}); 

setInterval(() => { store.dispatch({type: "ADD"}); },2000)