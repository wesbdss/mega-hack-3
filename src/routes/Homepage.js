import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Homepage extends Component {
    render() {
        return (
            <div style={{display:"flex",flexDirection:"column"}}>
                <Link to="/mega-hack-3/login">Login page</Link>
                <Link to="/mega-hack-3/dashboard/Conquista">Card Page</Link>
            </div>
        )
    }
}
