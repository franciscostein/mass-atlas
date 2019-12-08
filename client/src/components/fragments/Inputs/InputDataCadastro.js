import React from 'react';
import MaskedInput from 'react-text-mask';

const InputDataCadastro = props => {
    return (
        <div className={`col-c ${props.span}`}>
            <div className="form-group">
                <label className="form-control-label" htmlFor={props.inputId}>
                    {props.label}
                </label>
                <MaskedInput
                    mask={[/[0-9]/, /\d/, '/', /[0-1]/, /\d/, '/', /[1-2]/, /\d/, /\d/, /\d/]}
                    placeholder="__/__/____"
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

export default InputDataCadastro;