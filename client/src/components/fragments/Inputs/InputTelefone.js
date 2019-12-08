import React, { useEffect } from 'react';
import MaskedInput from 'react-text-mask';

const InputTelefone = props => {
    
    useEffect(() => {}, [props.value]);

    function mask(userInput) {
        let numbers = userInput.match(/\d/g);
        let numberLength = 0;

        if (numbers) {
            numberLength = numbers.join("").length;
        }
      
        if (numberLength > 10) {
            return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        } else {
            return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        }
    }

    return (
        <div className={`col-c ${props.span}`}>
            <div className="form-group">
                <label className="form-control-label" htmlFor={props.inputId}>
                    {props.label}
                </label>
                <MaskedInput
                    mask={value => mask(value)}
                    guide={true}
                    placeholder="(__) ____-____"
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

export default InputTelefone;