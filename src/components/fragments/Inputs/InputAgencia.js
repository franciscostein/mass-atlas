import React from 'react';
import MaskedInput from 'react-text-mask';

const InputAgencia = props => {
    return (
        <div className={`col-c ${props.span}`}>
            <div className="form-group">
                <label className="form-control-label" htmlFor={props.inputId}>
                    {props.label}
                </label>
                <MaskedInput
                    mask={[/[0-9]/, /\d/, /\d/, '-', /\d/]}
                    placeholder="___-_"
                    type={props.type} 
                    className={`form-control ${props.invalidMessage ? 'is-invalid' : ''}`}
                    id={props.inputId}
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

export default InputAgencia;