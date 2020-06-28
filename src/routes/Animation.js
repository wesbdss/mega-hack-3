import React, { Component } from 'react';
import scenes from './Cenas';

export default class Animation extends Component {
    componentDidMount() {
        scenes.scene2();
    }
    render() {
        return (
            <div>
                <div id='webgl'></div>
                <div id="canvas" />
                <div id="container">

                </div>
            </div>

        );
    }
}
