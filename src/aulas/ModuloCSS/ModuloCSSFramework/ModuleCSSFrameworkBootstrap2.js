import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const ModuleCSSFrameworkBootstrap2 = () => {
    return (
        <Card bg="dark" text="white" className="m-5" style={{maxWidth: "18rem"}}>
            <Card.Header>Notebook</Card.Header>
            <Card.Body>
                <Card.Title>R$ 2500</Card.Title>
                <Card.Text>Um notebook usando os componentes do bootstrap</Card.Text>
            </Card.Body>
        </Card>
    )
}


export default ModuleCSSFrameworkBootstrap2
