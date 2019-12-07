import React, { useEffect } from 'react';

const Input = props => {

    useEffect(() => { console.log('rerendered') }, [props.invalidMessage]);

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
                    value={props.value}
                    onChange={event => props.onChange(event.target.value)}
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