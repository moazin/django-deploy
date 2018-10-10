import React from 'react';
import { withFormsy } from 'formsy-react';

class Input extends React.Component {
    constructor(props){
        super(props);
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(event){
        this.props.setValue(event.currentTarget.value);
    }

    render(){
        const errorMessage = this.props.getErrorMessage();
        return (
            <div className="form-group">
                <span>{errorMessage}</span>
                <input 
                    type="text" 
                    className="form-control"
                    onChange={this.changeValue}
                    value={this.props.getValue() || ''} 
                /> 
            </div>
        )
    }
}

export default withFormsy(Input);