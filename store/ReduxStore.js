

import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {getData} from '../store/reducers/serverReducer'


      

const initialState = [
    {
    name:'exercise1',
    input:'Complete exercise',   
     },   {
    name:'exercise2',
    input:'Complete exercise',
    },   {
    name:'exercise3',
    input:'Complete exercise',
    },   {
    name:'exercise4',
    input:'Complete exercise',
    },    {
    name:'exercise5',
    input:'Complete exercise',
    }, {
    name:'exercise6',
    input:'Complete exercise',
    }, 
{
    name:'exercise7',
    input:'Complete exercise',
    },
    {
      name:'_id', 
      input:''
    }
]
 
export function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_INPUT":
      return state.map((exercise) => {
            if (exercise.name ===action.name) {
              return { ...exercise,  input:action.text };
          } else {
            return exercise
          }
        }) 
      case "GET_DATABASE_DATA":
        return state.map((exercise) => {
        for (let key in action.payload ) {
          if (exercise.name === key) { 
            return {...exercise, input:action.payload[key]}
          } 
        } return exercise 
      })

      default:
        return state;
    }


}
 



export const store = createStore(reducer,  applyMiddleware(thunk));

