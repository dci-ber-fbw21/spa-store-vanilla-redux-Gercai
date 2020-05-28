let faker = require('faker');
import { createStore } from 'redux';


const interval = setInterval(() => { store.dispatch({type: "ADD"}); },2000)

export function counter (state = {
    items: [],
    force: false,
    count: 0
}, action) {
    switch(action.type) {
        case "FORCE":
            state.force = true;            
        case "ADD":
            state.count++;
            state.items.push("<li>" + faker.fake("{{lorem.word}}" + "</li>"));
            return {...state};             
        default: 
            return {...state};
            }
}

export const store = createStore(counter);
