import '../styles/main.scss';
import { createStore } from 'redux';
import {counter} from "./reducer";
import {FORCE,ADD} from "./check";
let faker = require('faker');

let store = createStore(counter);
let limit = 5;

store.subscribe(() => {
   
    if(store.getState().items.length === limit){
        clearInterval(interval);
    }        
    if(store.getState().items.length <= limit * 2 
        || store.getState().force === true
        && store.getState().items.length <= limit * 2){
            renderNumber();
            renderList();
    }}
    
)

const renderNumber = () => {
    document.querySelector(".count").innerHTML = store.getState().items.length;
}

const renderList = () => {
    document.querySelector(".items").innerHTML = store.getState().items.map((element) => {
      return (  "<li>" + element + "</li>");
    }).join("");   
}

document.querySelector(".items").innerHTML = "no Items";

// functions
const clickHandler =  () => {
    store.dispatch({
        type: "FORCE",
        payload:  { text: faker.lorem.sentence() },
    });
};

const interval = setInterval(() => { 
    store.dispatch({
        type: "ADD",
        payload:  { text: faker.lorem.sentence() },
    }); },2000);


document.querySelector("button").addEventListener("click",clickHandler);
