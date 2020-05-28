import '../styles/main.scss';
import { createStore } from 'redux';
import {counter} from "./reducer";
import {FORCE,ADD} from "./check";

let store = createStore(counter);

store.subscribe(() => {
    if(store.getState().items.length === 5){
        clearInterval(interval);
    }        
    if(store.getState().items.length <6 
        || store.getState().force === true
        && store.getState().items.length <=10){
        document.querySelector(".count").innerHTML = store.getState().count;
        document.querySelector(".items").innerHTML = store.getState().items.join("");
    }}
)

document.querySelector(".items").innerHTML = "no Items";
document.querySelector("button").addEventListener("click",addSomething);

store.dispatch({type:ADD}); 

// functions
function addSomething (){store.dispatch({type: FORCE});}
const interval = setInterval(() => { store.dispatch({type: "ADD"}); },2000)