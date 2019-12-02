import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SelectCategoria = props => {
    const [categorias, setCategorias] = useState([{
        value: 0,
        name: ''
    }]);

    useEffect(() => {
        axios.get('/categorias')
        .then(response => {
            const { data } = response;
            const categoriasData = [];

            data.forEach(element => {
                categoriasData.push({ value: element.id, name: element.categoria });
            });
            setCategorias(categoriasData);
        })
        .catch(error => {
            console.log(error);
        })
    }, [props.value]);

    return (
        <div className={`col-c ${props.span}`}>
            <div className="form-group">
                <label htmlFor="selectCategoria">Categoria</label>
                <select 
                    className="form-control" 
                    id="selectCategoria"
                    onChange={event => props.onChange(event.target.value)}
                >
                    <option value={0}></option>
                    { 
                        categorias.map((e, key) => {
                            return <option key={key} value={e.value} selected={e.value === props.value ? 'selected' : ''}>{e.name}</option>
                        })
                    }
                </select>
            </div>
        </div>
    );
}

export default SelectCategoria;