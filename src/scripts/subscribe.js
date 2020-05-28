import {store} from "./reducer";

const interval = setInterval(() => { store.dispatch({type: "ADD"}); },2000)


function addSomething (){store.dispatch({type: FORCE});}

export let subscribe = () => {
    if(store.getState().items.length === 5){
        clearInterval(interval);
    }        
    if(store.getState().items.length <6 
        || store.getState().force === true
        && store.getState().items.length <=10){
        document.querySelector(".count").innerHTML = store.getState().count;
        document.querySelector(".items").innerHTML = store.getState().items.join("");
    }}
;