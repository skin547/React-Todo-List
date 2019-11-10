import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'
// import {Link} from 'react-router-dom'

const Sidebar = () => (
    <Col>
        <SidebarButton content="Button 1"/>
        <SidebarButton content="Button 2"/>
        <SidebarButton content="Button 3"/>
    </Col>
)

const SidebarButton = ({content}) => (
    <Row style={{marginTop:'5%',marginBottom:'5%',marginLeft:'3%',marginRight:'3%'}}>
        <Button variant='info' block>
            {content}
        </Button>
    </Row>
)

export default Sidebar;