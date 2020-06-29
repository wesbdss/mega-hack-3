import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Link to="/mega-hack-3/login">Login page</Link>
            </div>
        )
    }
}
