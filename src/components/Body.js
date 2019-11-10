import React from 'react'
import {Route} from 'react-router-dom'
import { Col, Row, } from 'react-bootstrap'
import Sidebar from './Sidebar'
import Home from './Home'
import About from './About'
import TodoForm from './TodoForm'
import FetchTest from '../testComponent/FetchTest'


const Body = () => (
    <Row style={{marginTop:"3%"}}>
        <Col xs='12' sm='12' md='3' lg='2' ml='2'>
            <Sidebar />
        </Col>
        <Col >
            <Route exact path='/' component={About} />
            <Route path='/about' component={About} />
            <Route path='/todolist' component={TodoForm} />
            <Route path='/fetchtest' component={FetchTest} />
        </Col>
    </Row>
)

export default Body;