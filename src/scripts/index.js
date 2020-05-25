import '../styles/main.scss';
import { createStore } from 'redux';
let faker = require('faker');

function counter (state = {
    items: [],
    force: false,
    count: 0
}, action) {
    switch(action.type) {
        case "FORCE":
            state.force = true;            
        case "ADD":
            state.count++;
            state.items.push("<li>" + faker.lorem.word() + "</li>");
            return {...state};            
        default: 
            return state
            }
}

let store = createStore(counter);

document.querySelector(".items").innerHTML = "no Items";
 
function addSomething (){
    store.dispatch({type: "FORCE"});
}

document.querySelector("button").addEventListener("click",addSomething);
 
store.subscribe(() => {

    if(store.getState().items.length === 5){
        clearInterval(interval);
    }        

    if(store.getState().items.length <6 
        || store.getState().force === true
        && store.getState().items.length <=10){


        // store.getState().count.map((element) =>{
        //     let list =  "<li>" + element + "</li>";
        // });

        document.querySelector(".count").innerHTML = store.getState().count;
        

        document.querySelector(".items").innerHTML = store.getState().items;
        
        store.getState().items;

    }}
)
  
store.dispatch({type:"ADD"}); 

let interval = setInterval(() => { store.dispatch({type: "ADD"}); },2000)