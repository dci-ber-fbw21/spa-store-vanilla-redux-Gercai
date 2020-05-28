let faker = require('faker');
import { createStore } from 'redux';


export function counter (state = {
    items: [],
    force: false
}, action) {
    switch(action.type) {
        case "FORCE":
            state.force = true;            
        case "ADD":
            state.items.push("<li>" + faker.fake("{{lorem.word}}" + "</li>"));
            return {...state};             
        default: 
            return {...state};
            }
}

export const store = createStore(counter);
