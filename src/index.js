import React ,{createContext, useReducer} from 'react'
import ReactDOM from 'react-dom'
import {Container} from 'react-bootstrap'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Body from './components/Body'
import {TodoReducer, initialState} from './Reducers/TodoReducer'
// import {TodoContext, Store} from './context/TodoContext'

const TodoContext = createContext({});

const App = () => {

    const [state, dispatch] = useReducer(TodoReducer, initialState);

    return (
    <TodoContext.Provider value={{ state, dispatch }} >
        <Router>
            <Container>
                    <Header />
                    <Body />
            </Container>
        </Router>
    </TodoContext.Provider>

    )
}


ReactDOM.render(<App/>,document.getElementById('root'));

export {TodoContext};