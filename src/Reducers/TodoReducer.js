// import getData from '../api/getData'
function getTodosJson() {
    let url = 'https://jsonplaceholder.typicode.com/todos/';
    let todos =[];
    fetch(url)
        .then(res => res.json())
        .then(json => json.forEach( (todo) => todos.push(todo) ))
    return todos;
}

const initialState ={
    todos: getTodosJson(),
    count: 200,
} 
// const getInitialState = async () =>{
//     let todos = await getData();
//     let count = 200;
//     return {todos, count};
// }
// const initialState = {
//     todos: getData(),
//     count: 200,
// } 
// const initialState = getInitialState();

function TodoReducer(state, action){
    switch(action.type){
        case "ADD_TODO":
            const newTodo = {id:state.count+1, title:action.text, completed:false };
            return {todos:[ ...state.todos,newTodo ],count:state.count+1};

        case "EDIT_TODO":
            let edit_target = state.todos.find( (todo) => {
                return todo.id === action.target;
            });
            // edit_target.text = action.text;
            edit_target.title = action.text;
            return {todos:[...state.todos],count:state.count};

        case "REMOVE_TODO":
            let newTodos = state.todos.filter( todo => todo.id !== action.id );
            return { todos: [...newTodos],count:state.count};

        case "COMPLETE_TODO":
            let complete_target = state.todos.find((todo) => {
                return todo.id === action.target;
            });
            complete_target.completed = action.completed;
            return { todos: [...state.todos], count: state.count};
        case "RESET":
            return {todos:[],count:0};
        default:
            return state;
    }
}

export {initialState, TodoReducer};