import React from 'react';

const Input = props => {
    return (
        <div className={`col-c ${props.span}`}>
            <div className="form-group">
                <label 
                    htmlFor={props.inputId}
                >
                    {props.label}
                </label>
                <input 
                    type={props.type} 
                    className="form-control" 
                    id={props.inputId}
                    maxLength={props.maxLength}
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