import React from 'react';

const Input = props => {
    return (
        <div className={`col-c ${props.span}`}>
            <div className="form-group">
                <label className="form-control-label" htmlFor={props.inputId}>
                    {props.label}
                </label>
                <input 
                    type={props.type} 
                    className={`form-control ${props.invalidMessage ? 'is-invalid' : ''}`}
                    id={props.inputId}
                    maxLength={props.maxLength}
                    required={ props.required ? 'required' : '' }
                    value={props.value}
                    onChange={event => props.onChange(event.target.value)}
                />
                <div className="invalid-feedback">
                    {props.invalidMessage}
                </div>
            </div>
        </div>
    );
}

export default Input;