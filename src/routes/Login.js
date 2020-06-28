import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Login extends Component {
    render() {
        return (
            <form action="">
                <label htmlFor="">
                    Usuário
                <input type="text" />
                </label>
                <label htmlFor="">
                    Senha:
                <input type="password" name="" id="" />
                </label>
                <button type="submit">Login</button>
                <Link to="/anima">Pass</Link>
            </form>
        );
    }
}
