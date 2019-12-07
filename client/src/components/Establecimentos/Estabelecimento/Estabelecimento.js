import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import cnpjUtils from 'node-cnpj';

import mask from '../../../utils/mask';
import Input from '../../fragments/Inputs/Input';
import InputCNPJ from '../../fragments/Inputs/InputCNPJ';
import InputTelefone from '../../fragments/Inputs/InputTelefone';
import SelectEstado from '../../fragments/Selects/SelectEstado';
import InputDataCadastro from '../../fragments/Inputs/InputDataCadastro';
import SelectCategoria from '../../fragments/Selects/SelectCategoria';
import InputAgencia from '../../fragments/Inputs/InputAgencia';
import InputConta from '../../fragments/Inputs/InputConta';

const Estabelecimento = props => {
    const { id } = useParams();
    const history = useHistory();
    const [title, setTitle] = useState('Estabelecimento');
    const [status, setStatus] = useState(false);
    const [fantasia, setFantasia] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [cadastro, setCadastro] = useState(null);
    const [categoria, setCategoria] = useState(0);
    const [agencia, setAgencia] = useState('');
    const [conta, setConta] = useState('');

    useEffect(() => {
        if (id) {
            axios.get(`/estabelecimentos/${id}`)
            .then(response => {
                const { data } = response;

                if (data.id) {
                    setTitle(data.nome_fantasia);
                    setFantasia(data.nome_fantasia);
                    setRazaoSocial(data.razao_social);
                    setCnpj(cnpjUtils.mask(data.cnpj));
                    setEmail(data.email);
                    setTelefone(mask.telefone(data.telefone));
                    setEndereco(data.endereco);
                    setCidade(data.cidade);
                    setEstado(data.estado);
                    setCadastro(mask.data(data.data_cadastro));
                    setCategoria(data.categoria);
                    setStatus(data.status);
                    setAgencia(mask.agencia(data.agencia));
                    setConta(mask.conta(data.conta));
                }
            })
            .catch(error => {
                setTitle('Estabelecimento não encontrado');
                console.log(error);
            });
        }
    }, []);

    const handleSubmit = event => {
        event.preventDefault();

        console.log('Submited');
    }

    const handleCancelarClick = () => {
        history.push('/estabelecimentos');
    }

    return (
        <div>
            <h2 className="text-center">
                { !id ? 
                    <span className="badge badge-primary">Novo</span> 
                : '' } {title}
            </h2>
            <form className="container needs-validation mt-4" onSubmit={event => handleSubmit(event)}>
                <div className="row-c mb-4">
                    <div className="custom-control custom-switch">
                        <input 
                            type="checkbox" 
                            className="custom-control-input" 
                            id="switchAtivo"
                            checked={status ? 'checked' : ''}
                            onChange={() => setStatus(!status)}
                        />
                        <label className="custom-control-label" htmlFor="switchAtivo">Ativo</label>
                    </div>
                </div>
                <div className="row-c">
                    <Input
                        span="span2of2"
                        inputId="inputNomeFantasia"
                        label="Nome fantasia"
                        type="text"
                        maxLength={60}
                        invalidMessage={'Inválido'}
                        required={false}
                        value={fantasia}
                        onChange={value => setFantasia(value)}
                    />
                </div>
                <div className="row-c">
                    <Input
                        span="span2of2"
                        inputId="inputRazaoSocial"
                        label="Razão social"
                        type="text"
                        maxLength={80}
                        invalidMessage={'Inválido'}
                        required={true}
                        value={razaoSocial}
                        onChange={value => setRazaoSocial(value)}
                    />
                </div>
                <div className="row-c">
                    <InputCNPJ
                        span="span1of3"
                        inputId="inputCnpj"
                        label="CNPJ"Telefone
                        maxLength={18}
                        invalidMessage={'Inválido'}
                        required={true}
                        value={cnpj}
                        onChange={value => setCnpj(value)}
                    />
                    <Input
                        span="span1of3"
                        inputId="inputEmail"
                        label="E-mail"
                        type="email"
                        maxLength={45}
                        invalidMessage={'Inválido'}
                        required={false}
                        value={email}
                        onChange={value => setEmail(value)}
                    />
                    <InputTelefone
                        span="span1of3"
                        inputId="inputTelefone"
                        label="Telefone"
                        type="text"
                        invalidMessage={'Inválido'}
                        required={categoria === 1}  // Categoria 1 - Supermercado = telefone obrigatório
                        isCelular={telefone.length === 15}
                        value={telefone}
                        onChange={value => setTelefone(value)}
                    />
                </div>
                <div className="row-c">
                    <Input
                        span="span2of4"
                        inputId="inputEndereco"
                        label="Endereço"
                        type="text"
                        maxLength={60}
                        invalidMessage={'Inválido'}
                        required={false}
                        value={endereco}
                        onChange={value => setEndereco(value)}
                    />
                    <Input
                        span="span1of4"
                        inputId="inputCidade"
                        label="Cidade"
                        type="text"
                        maxLength={32}
                        invalidMessage={'Inválido'}
                        required={false}
                        value={cidade}
                        onChange={value => setCidade(value)}
                    />
                    <SelectEstado
                        span="span1of4"
                        value={estado}
                        onChange={value => setEstado(value)}
                    />
                </div>
                <div className="row-c">
                    <div className="col-c span1of3">
                        <InputDataCadastro
                            span="span2of2"
                            inputId="dateCadastro"
                            label="Cadastro"
                            type="text"
                            invalidMessage={'Inválido'}
                            required={false}
                            value={cadastro}
                            onChange={value => setCadastro(value)}
                        />
                    </div>
                    <div className="col-c span1of3">
                        <SelectCategoria
                            span="span2of2"
                            value={categoria}
                            onChange={value => setCategoria(value)}
                        />
                    </div>
                    <div className="col-c span1of3">
                        <InputAgencia
                            span="span1of2"
                            inputId="inputAgencia"
                            label="Agência"
                            type="text"
                            maxLength={4}
                            invalidMessage={'Inválido'}
                            required={false}
                            value={agencia}
                            onChange={value => setAgencia(value)}
                        />
                        <InputConta
                            span="span1of2"
                            inputId="inputConta"
                            label="Conta"
                            type="text"
                            maxLength={6}
                            invalidMessage={'Inválido'}
                            required={false}
                            value={conta}
                            onChange={value => setConta(value)}
                        />
                    </div>
                </div>
                <div className="row-c mt-2">
                    <div className="col-c span1of2">
                        <div className="form-group float-right">
                            <button 
                                type="submit" 
                                className="btn btn-primary"
                            >
                                Salvar
                            </button>
                        </div>
                    </div>
                    <div className="col-c span1of2">
                        <div className="form-group">
                            <button 
                                type="button" 
                                className="btn btn-secondary"
                                onClick={() => handleCancelarClick()}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </form>
       </div>
    );
}

export default Estabelecimento;