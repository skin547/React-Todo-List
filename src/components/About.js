import React,{useState, useContext, useEffect} from 'react'
import {Col, Row, Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import { TodoContext } from '..';
import TodoCard from './TodoCard';
import ProductCard from '../testComponent/ProductCard';
import getData from '../api/getData';

const About = () => {
    return (
        <Col>
            <Introduction/>
            {/* <TestingContext />
            <Cart /> */}
        </Col>
    )
}

const Introduction = () =>{
    return(
        <div>            
            <Card>
            <Card.Body>
                <Card.Text>
                    這是一個React Web App，使用了React-hook、React-Router以及React-bootstrap來開發。<br/>
                    To-Do List頁面是個簡易的待辦事項App, 初始資料是使用Fetch從jsonplaceholder.typicode.com取得的Json測試資料<br/>
                </Card.Text>
                <Card.Title>
                    吳思慶
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">基本資料</Card.Subtitle>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>1997年出生，來自台北</ListGroupItem>
                    <ListGroupItem>目前就讀雲林科技大學資訊管理系四年級</ListGroupItem>
                    <ListGroupItem>手機：0983926649</ListGroupItem>
                    <ListGroupItem>Email：skin547yo@gmail.com</ListGroupItem>
                    <ListGroupItem>
                        <Card.Link href="https://github.com/skin547">
                            我的Github
                        </Card.Link>
                    </ListGroupItem>
                </ListGroup>
            </Card.Body>
            </Card>
        </div>
    )
}

export default About;