import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Octicon, { Plus, Search, X } from '@primer/octicons-react';
import cnpjUtils from 'node-cnpj';

import mask from '../../utils/mask';
import EstabelecimentoListItem from '../fragments/EstabelecimentoListItem';

const Estabelecimentos = props => {
    const history = useHistory();
    const [estabelecimentos, setEstabelecimentos] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = query => {
        let url = '/estabelecimentos';

        if (query) {
            url = `/estabelecimentos?search=${query}`;
        }

        axios.get(url)
        .then(response => {
            const { data } = response;

            if (data.length > 0) {
                const estabelecimentoArray = [];

                data.forEach(item => {
                    estabelecimentoArray.push({
                        _id: item.id,
                        nomeFantasia: item.nome_fantasia,
                        razaoSocial: item.razao_social,
                        cnpj: cnpjUtils.mask(item.cnpj),
                        telefone: mask.telefone(item.telefone),
                        cidade: item.cidade,
                        estado: item.estado,
                        ativo: item.status,
                        categoria: item.categoria
                    })
                });
                setEstabelecimentos(estabelecimentoArray);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    const handleAddClick = () => {
        history.push('/estabelecimento');
    }

    const handleSearchInputKeyDown = event => {
        if (event.key === 'Enter') {
            fetchData(searchQuery);
        }
    }

    const handleClearClick = () => {
        fetchData();
        setSearchQuery('');
    }

    return (
        <div className="container">
            <span className="h2">Estabelecimentos</span>

            <button
                className="btn btn-link float-right text-success" 
                data-toggle="tooltip" 
                data-placement="left" 
                title="Adicionar"
                onClick={() => handleAddClick()}
            >
                <Octicon icon={Plus} size='medium' />
            </button>

            <div className="row-c mt-2">
                <div className="col-c span2of3">
                    <div className="input-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Pesquisar"
                            value={searchQuery}
                            onChange={event => setSearchQuery(event.target.value)}
                            onKeyDown={event => handleSearchInputKeyDown(event)}
                        />
                        <div className="input-group-append">
                            <button 
                                className="input-group-text"
                                onClick={() => fetchData(searchQuery)}
                            >
                                <Octicon icon={Search} size='small' />
                            </button>
                        </div>
                        <div className="input-group-append">
                            <button 
                                className="input-group-text"
                                onClick={() => handleClearClick()}
                            >
                                <Octicon icon={X} size='small' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            { estabelecimentos[0] ?
                <ul className="mt-3">
                    {
                        estabelecimentos.map((estabelecimento, i) => {
                            return <li key={estabelecimento._id}>
                                <EstabelecimentoListItem
                                    _id={estabelecimento._id}
                                    fantasia={estabelecimento.nomeFantasia}
                                    razaoSocial={estabelecimento.razaoSocial}
                                    ativo={estabelecimento.ativo}
                                    cnpj={estabelecimento.cnpj}
                                    telefone={estabelecimento.telefone}
                                    cidade={estabelecimento.cidade}
                                    estado={estabelecimento.estado}
                                    categoria={estabelecimento.categoria}
                                />
                                { i !== estabelecimentos.length - 1 ?
                                    <hr/> : ''
                                }
                            </li>
                        })
                    }
                </ul>
            : <h3 className="mt-5 text-center">Nenhum estabelecimento encontrado</h3> }
        </div>
    );
}

export default Estabelecimentos;