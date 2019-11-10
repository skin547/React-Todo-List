import React, {useReducer, useContext} from 'react'
import {Col, Row} from 'react-bootstrap'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
// import {initialState, TodoReducer} from '../Reducers/TodoReducer'
import {TodoContext} from '../index'


const TodoForm = () => {
    const context = useContext(TodoContext);
    const state = context.state;
    const dispatch = context.dispatch;
    return(
        <Col>
            <AddTodo 
                resetTodo={ ()=> { dispatch( {type:'RESET'} ); } } 
                addTodo={ (text) => {dispatch( {type:"ADD_TODO", text:text, completed:false} ); } }/>
            <hr />
            <TodoList todos={state.todos} />
            
        </Col>
    )
}

export default TodoForm;