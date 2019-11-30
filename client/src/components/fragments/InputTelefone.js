import React from 'react';
import MaskedInput from 'react-text-mask';

const maskTelefone = ['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
const maskCelular = ['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

const Input = props => {
    const [isCelular, setIsCelular] = React.useState(false);
    const [telefone, setTelefone] = React.useState('');

    const handleTelefoneChange = value => {
        if (value[5] === 9) {
            setIsCelular(true);
        }
    }

    return (
        <div className={`col-c ${props.span}`}>
            <div className="form-group">
                <label 
                    htmlFor={props.inputId}
                >
                    {props.label}
                </label>
                <MaskedInput
                    mask={isCelular ? maskCelular : maskTelefone}
                    placeholder="(__) ____-____"
                    type={props.type} 
                    className="form-control" 
                    id={props.inputId}
                    required={ props.required ? 'required' : '' }
                    // value={telefone}
                    onChange={event => handleTelefoneChange(event.target.value)}
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