import React, {useState, } from 'react';
import { Button, Col, Card, Form, Toast} from 'react-bootstrap';

const TodoCard = ({ todo, editTodo, removeTodo, completeTodo}) => {
    const [id, setId] = useState(todo.id);
    const [text, setText] = useState(todo.title);
    // const [completed, setCompleted] = useState(todo.completed);
    const [disable,setDisable] = useState(true);
    const [editable,setEditable] = useState('Edit');
    // const [date, setDate] = useState(new Date());

    const handleTextChange = (e) => {
        setText(e.target.value);
    }

    const edit = () => {
        setDisable(!disable);
        let current = disable ? 'Done' : 'Edit';
        setEditable(current);
        editTodo(id, text);
    }

    const remove = () => {
        removeTodo(id);
    }

    return(
        <Col>
            {/* <Toast>
                <Toast.Header>
                    <strong className="mr-auto">TODO</strong>
                    <small>{date.getMonth() + 1}/{date.getDate()} {date.getHours()}:{date.getMinutes()}</small>
                </Toast.Header>
                <Toast.Body>{text}</Toast.Body>
            </Toast> */}
            <Card style={{width:"20rem",marginTop:"2%", }} >
                <Card.Body>
                    <Card.Title>
                        <small>
                            ID:{id}
                        </small>
                        <Form.Control plaintext={disable} readOnly={disable} value={text} 
                        onChange={handleTextChange} />
                    </Card.Title>
                    <Button variant="outline-info" onClick={edit} >
                        {editable}
                    </Button>
                    <Button variant="outline-danger" onClick={remove} style={{
                        position: "absolute",
                        right: "10px",
                    }}>
                    <b>X</b>
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default TodoCard;