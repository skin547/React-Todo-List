import React, {useReducer ,createContext} from 'react'
import {TodoReducer, initialState}from '../Reducers/TodoReducer'

const TodoContext = createContext();


const {state, dispatch} = useReducer(TodoReducer, initialState);

const Store = {state, dispatch};

export {TodoContext, Store};