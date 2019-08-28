import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import './Home.scss';
import Container from '@material-ui/core/Container';

export default class Home extends Component {
    render() {
        return (
                    <div className="BackgroundDiv" >
                        <h1>Inicio</h1>
                        <p className="bodyText">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
                        <Button variant="contained" color="primary" >
                            HOLA MUNDO
                        </Button>
                    </div>    
                
        )
    }
}
