import React from 'react';
import MaskedInput from 'react-text-mask';

const Input = props => {
    return (
        <div className={`col-c ${props.span}`}>
            <div className="form-group">
                <label 
                    htmlFor={props.inputId}
                >
                    {props.label}
                </label>
                <MaskedInput
                    mask={[/[0-9]/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
                    placeholder="__.___.___/____-__"
                    type={props.type} 
                    className="form-control" 
                    id={props.inputId}
                    required={ props.required ? 'required' : '' }
                />
                <div 
                    className="invalid-feedback"
                >
                    {props.invalidMessage}
                </div>
            </div>
        </div>
    );
}

export default Input;