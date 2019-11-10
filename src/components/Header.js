import React from 'react'
import { Button, Col, Row, Nav, Tab} from 'react-bootstrap'
import {Link, } from 'react-router-dom'

const Header = () =>{
    return (
        <Nav variant="tabs" fill justify defaultActiveKey="/home" style={{ marginTop:"3%" }}>
            {/* <HeaderButton title="Home" path="Home" /> */}
            <HeaderButton title="About" path="about" />
            <HeaderButton title="To-Do List" path="todolist" />
        </Nav>
    )
}

const HeaderButton = ({ title, path}) => {
    return (
        <Nav.Item>
            <Nav.Link as={Link} to={path} eventKey={path}>
                <strong>{title}</strong>
            </Nav.Link>
        </Nav.Item>
    )
}

export default Header;