import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Login.css';
import { Form, Button, Alert } from 'react-bootstrap';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            auth: 0
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
    }


    handleChange(e) {
        const target = e.target;
        this.setState({ email: target.value })

    }

    handleChange1(e) {
        const target = e.target;
        this.setState({ password: target.value })
    }


    handleSubmit(e) {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: this.state.email, password: this.state.password })
        }
        console.log(this.state.email,this.state.password);
        fetch('https://servercards.herokuapp.com/user-api/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("Do server",data.email,data.password)
                if (this.state.email === data.email && this.state.password === data.password) {
                    // alert(window.location.href.replace('login','menu'));
                    window.location.href = window.location.href.replace('/login', '/dashboard') + "/" + data.email + "/" + data.name + "/" + data.id
                    // return ;
                } else {
                    alert("Senha ou Email Incorreto");
                }
            });


        e.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="top">
                    <div className="letra">
                        AIr Toon
                    </div>

                </div>
                <div className="col meio">
                    <Alert variant="dark " className="alerta" >
                            <Alert.Heading>Explore uma aventura em cada CLICK</Alert.Heading>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" value={this.state.password} placeholder="Password" onChange={this.handleChange1} />
                            </Form.Group>
                            <Button variant="dark" type="submit">
                                Logar</Button>
                            <Link to="/mega-hack-3/anima">Pass Rapido</Link>
                        </Form>
                    </Alert>
                </div>
                <div className="bottom">

                </div>
            </div>



        );
    }
}
