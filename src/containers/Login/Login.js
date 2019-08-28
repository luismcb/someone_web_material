import React, { Component } from 'react'
import TextInput from '../../components/TextInput/TextInput';
import Dropdown from '../../components/Dropdown/Dropdown';

export default class Login extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="BackgroundDiv d-flex flex-md-column justify-content-center py-5 text-center">
                        <h1>Inicio de Sesión</h1>
                        <p className="bodyText">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
                        <div className="row">
                            <div className="col 6">
                                <TextInput label="Nombres" labelDirection="side" />
                                <Dropdown />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
