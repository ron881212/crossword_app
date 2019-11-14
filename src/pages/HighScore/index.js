import React, { Component } from 'react';
import NavBar from '../../components/Nav';

class HighScore extends Component {
    render() {
        const score = '00'
        return (
            <div>
            <NavBar />
                <h1
                style={{marginTop:'15%', display:'flex', justifyContent:'center'}}
                >HighScore: {score}</h1>
            </div>
        );
    }
}

export default HighScore