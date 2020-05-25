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

store.subscribe(() => {

document.querySelector(".container").innerHTML = store.getState();
    }
)

setInterval(() => { store.dispatch({type: "ADD"}); },2000)