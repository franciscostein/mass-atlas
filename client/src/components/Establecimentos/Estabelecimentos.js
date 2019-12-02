import React from 'react';
import Octicon, { Plus, Search } from '@primer/octicons-react';

import EstabelecimentoListItem from '../fragments/EstabelecimentoListItem';

const estabelecimentos = [
    {
        _id: 1,
        nomeFantasia: 'Primeiro',
        razaoSocial: 'Primeiro LTDA.',
        cnpj: '718.706.154/0001-28',
        email: 'atendimento@primeiro.com',
        telefone: '(19) 9.7623-6890',
        endereco: 'Rua 1, 001, Centro',
        cidade: 'Campinas',
        estado: 'SP',
        cadastro: '11/23/2002',
        categoria: 'Mercado',
        agencia: '2674',
        conta: '567294',
        ativo: true
    },
    {
        _id: 2,
        nomeFantasia: 'Segundo',
        razaoSocial: 'Segundo LTDA.',
        cnpj: '823.706.030/0002-28',
        email: 'atendimento@segundo.com',
        telefone: '(11) 9.7523-6490',
        endereco: 'Rua 2, 002, Centro',
        cidade: 'Belo Horizonte',
        estado: 'MG',
        cadastro: '03/30/1991',
        categoria: 'Posto',
        agencia: '2234',
        conta: '567434',
        ativo: false
    },
    {
        _id: 3,
        nomeFantasia: 'Terceiro',
        razaoSocial: 'Terceiro LTDA.',
        cnpj: '397.726.139/0001-87',
        email: 'atendimento@terceiro.com',
        telefone: '(21) 3523-6490',
        endereco: 'Rua 3, 003, Guanabara',
        cidade: 'Rio de Janeiro',
        estado: 'RJ',
        cadastro: '06/23/1988',
        categoria: 'Borracharia',
        agencia: '5624',
        conta: '434902',
        ativo: true
    }
]

const Estabelecimentos = props => {
    return (
        
        <div className="container">
            <span className="h2">Estabelecimentos</span>

            <a href="#" className="float-right text-success" data-toggle="tooltip" data-placement="left" title="Adicionar">
                <Octicon icon={Plus} size='medium' />
            </a>

            <div className="row-c mt-2">
                <div className="col-c span1of2">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Pesquisar"/>
                        <div className="input-group-append">
                            <button className="input-group-text"><Octicon icon={Search} size='small' /></button>
                        </div>
                    </div>
                </div>
            </div>

            <ul className="mt-3">
                {
                    estabelecimentos.map((estabelecimento, i) => {
                        return <li key={estabelecimento._id}>
                            <EstabelecimentoListItem
                                fantasia={estabelecimento.nomeFantasia}
                                ativo={estabelecimento.ativo}
                                cnpj={estabelecimento.cnpj}
                                telefone={estabelecimento.telefone}
                                cidade={estabelecimento.cidade}
                                estado={estabelecimento.estado}
                            />
                            { i !== estabelecimentos.length - 1 ?
                                <hr/> : ''
                            }
                        </li>
                    })
                }
            </ul>
        </div>
    );
}

export default Estabelecimentos;