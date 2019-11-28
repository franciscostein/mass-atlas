import React from 'react';

const SelectEstado = props => {
    return (
        <div className={`col-c ${props.span}`}>
            <div className="form-group">
                <label 
                    htmlFor="selectEstado"
                >
                    Estado
                </label>
                <select className="form-control" id="selectEstado">
                    <option></option>
                    <option>São Paulo</option>
                    <option>Minas Gerais</option>
                </select>
            </div>
        </div>
    );
}

export default SelectEstado;