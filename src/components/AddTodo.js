import React, {useState, } from 'react'
import { Button, Form, Col, Row, } from 'react-bootstrap'

const AddTodo = ({addTodo, resetTodo}) =>{
    const [text,setText] = useState("");
    // const [alertShow,setAlertShow] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        if (text !== "") {
            addTodo(text);
            setText("");
        }else{
            alert("請輸入待辦事項!");
        }
    }
    const reset = () => {
        resetTodo();
    }
    return(
        <Form >
            <Row>
                <Col >
                    <Form.Control onChange={(e) => setText(e.target.value)} placeholder="你是忘記了...還是害怕想起來?" value={text} />
                </Col>
            </Row>

            <Row style={{marginTop:"5pt"}}>
                <Col xs='9' sm='8' >
                    <Button variant='outline-primary' type='submit' block onClick={handleClick}>
                        Add To-do
                    </Button>
                </Col>

                <Col>
                    <Button variant='danger' block onClick={reset}>
                        X
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default AddTodo;