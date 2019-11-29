import React from 'react';

const estabelecimentos = [
    {
        _id: 1,
        nomeFantasia: 'Primeiro',
        razaoSocial: 'Primeiro LTDA.',
        CNPJ: '71870613000128',
        email: 'atendimento@primeiro.com',
        telefone: '19976236890',
        endereco: 'Rua 1, 001, Centro',
        cidade: 'Campinas',
        estado: 'SP',
        cadastro: '11/23/2002',
        categoria: 'Mercado',
        agencia: '2674',
        conta: '567294'
    },
    {
        _id: 2,
        nomeFantasia: 'Segundo',
        razaoSocial: 'Segundo LTDA.',
        CNPJ: '82370603000428',
        email: 'atendimento@segundo.com',
        telefone: '11975236490',
        endereco: 'Rua 2, 002, Centro',
        cidade: 'Belo Horizonte',
        estado: 'MG',
        cadastro: '03/30/1991',
        categoria: 'Posto',
        agencia: '2234',
        conta: '567434'
    }
]

const Estabelecimentos = props => {
    return (
        <ul>
            {
                estabelecimentos.map(estabelecimento => {
                return <li key={estabelecimento._id}>{estabelecimento.nomeFantasia}</li>
                })
            }
        </ul>
    );
}

export default Estabelecimentos;