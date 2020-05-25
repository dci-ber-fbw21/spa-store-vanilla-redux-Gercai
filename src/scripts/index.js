import '../styles/main.scss';
import { createStore } from 'redux'

function counter (state = 0, action) {
    switch(action.type) {
        case "INCREMENT":
            return state + 1
        case "DECREMENT": 
            return state -1
        default: 
            return state
    }
}

let store = createStore(counter);

store.subscribe(() => {
document.querySelector(".container").innerHTML = store.getState();
    }
)


setInterval(() => { store.dispatch({type: "INCREMENT"}); },2000)