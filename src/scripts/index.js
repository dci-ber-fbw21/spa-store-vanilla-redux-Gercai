import '../styles/main.scss';
import { createStore } from 'redux'

function counter (state = {
    count: [],
    force: false
}, action) {
    switch(action.type) {
        case "FORCE":
            state.force = true;            
        case "ADD":
            state.count.push("ok");
            return {...state};            
        default: 
            return state
            }
}

let store = createStore(counter);

document.querySelector(".counter").innerHTML = "no Items";
 
function addSomething (){
    store.dispatch({type: "FORCE"});
}

document.querySelector("button").addEventListener("click",addSomething);
 
store.subscribe(() => {


    if(store.getState().count.length === 5){
        clearInterval(interval);
        }        

    if(store.getState().count.length <6 
   || store.getState().force === true
   && store.getState().count.length <=10){
    document.querySelector(".counter").innerHTML = store.getState().count;
}}
)
  
store.dispatch({type:"ADD"}); 

let interval = setInterval(() => { store.dispatch({type: "ADD"}); },2000)