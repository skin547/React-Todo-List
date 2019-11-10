import React, { useContext, useState, } from 'react'
import TodoCard from './TodoCard'
import {Row} from 'react-bootstrap'
import { TodoContext } from '../index';

const TodoList = ({todos}) => {
    const context = useContext(TodoContext);
    const dispatch = context.dispatch;
    const editTodo = (target, text) => {
        dispatch( {type:'EDIT_TODO', target:target, text:text } );
    }

    const removeTodo = (id) => {
        dispatch({ type: "REMOVE_TODO", id:id} );
    }

    const completeTodo = (id, completed) => {
        dispatch({ type: "COMPLETE_TODO", id: id, completed: completed} );
    }

    return(
        <Row>
            {/* {todos ? todos.map((todo) => <TodoCard
                key={todo.id}
                todo={todo}
                editTodo={editTodo}
                removeTodo={removeTodo}
                completeTodo={completeTodo} />) : 
                <div>
                    Loading...
                </div>} */}
            {todos.map( (todo) => <TodoCard 
                key={todo.id} 
                todo={todo} 
                editTodo={editTodo} 
                removeTodo={removeTodo} 
                completeTodo={completeTodo}/>)
            }
        </Row>
    )
}


export default TodoList;