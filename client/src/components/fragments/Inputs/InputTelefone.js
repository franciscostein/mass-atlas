import React, { useEffect } from 'react';
import MaskedInput from 'react-text-mask';

const maskTelefone = ['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
const maskCelular = ['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

const InputTelefone = props => {

    useEffect(() => {}, [props.value]);

    return (
        <div className={`col-c ${props.span}`}>
            <div className="form-group">
                <label 
                    htmlFor={props.inputId}
                >
                    {props.label}
                </label>
                <MaskedInput
                    mask={props.isCelular ? maskCelular : maskTelefone}
                    placeholder="(__) ____-____"
                    type={props.type} 
                    className="form-control" 
                    id={props.inputId}
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

export default InputTelefone;