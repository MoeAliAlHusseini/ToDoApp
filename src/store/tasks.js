import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: []
};

function reducer(state = initialState, action){
    switch (action.type) {
        case "addTask": 
            return [...state, action.payload]
        case "removeTask": 
            return state.filter(item => item !== action.payload)
        default:
            return state;    
    }
}

export const tasksReducer = configureStore(reducer);


