import React, { Component } from 'react';
import Formsy from 'formsy-react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Input from './forms/Form.js';

class App extends Component {

    submit(model){
        var url = 'api/registrations/newregistration';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(model),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('Success: ', JSON.stringify(response)))
        .catch(error => console.error('Error: ', error));
    }

    render() {
        return (
            <div className="container">
                <Formsy onValidSubmit={this.submit}>
                    <Input 
                        name="first_name"
                        required
                    /> 
                    <Input 
                        name="last_name"
                        required
                    /> 
                    <Input 
                        name="email"
                        validations="isEmail"
                        validationError="This is not a valid email"
                        required
                    /> 
                    <Input 
                        name="username"
                        required
                    /> 
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Formsy>
            </div>
        );
    }
}

export default App;
