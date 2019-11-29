import React from 'react';

import Input from '../../fragments/Input';
import SelectEstado from '../../fragments/SelectEstado';

const Estabelecimento = props => {
    return (
        <div>
            <h2 className="text-center">Estabelecimento</h2>
            <form className="container needs-validation mt-4">
                <div className="row-c">
                    <Input
                        span="span2of2"
                        inputId="inputNomeFantasia"
                        label="Nome fantasia"
                        type="text"
                        maxLength={60}
                        invalidMessage={'Inválido'}
                        required={false}
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
                    />
                </div>
                <div className="row-c">
                    <Input
                        span="span1of3"
                        inputId="inputCnpj"
                        label="CNPJ"
                        type="text"
                        maxLength={18}
                        invalidMessage={'Inválido'}
                        required={true}
                    />
                    <Input
                        span="span1of3"
                        inputId="inputEmail"
                        label="E-mail"
                        type="email"
                        maxLength={45}
                        invalidMessage={'Inválido'}
                        required={false}
                    />
                    <Input
                        span="span1of3"
                        inputId="inputTelefone"
                        label="Telefone"
                        type="text"
                        maxLength={11}
                        invalidMessage={'Inválido'}
                        required={false}
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
                    />
                    <Input
                        span="span1of4"
                        inputId="inputCidade"
                        label="Cidade"
                        type="text"
                        maxLength={32}
                        invalidMessage={'Inválido'}
                        required={false}
                    />
                    <SelectEstado
                        span="span1of4"
                    />
                </div>
                <div className="row-c">
                    <div className="form-group">
                        <label></label>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="checkAtivo" name="Ativo"/>
                            <label className="custom-control-label" htmlFor="checkAtivo">Ativo</label>
                        </div>
                    </div>
                </div>
                <div className="row-c">
                    <div className="col-c span1of3">
                        <div className="col-c span2of2">
                            <div className="form-group">
                                <label htmlFor="dateCadastro">Cadastro</label>
                                <input type="date" className="form-control" id="dateCadastro"/>
                                <div className="invalid-feedback">Inválido</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-c span1of3">
                        <div className="col-c span2of2">
                            <div className="form-group">
                                <label htmlFor="selectCategoria">Categoria</label>
                                <select className="form-control" id="selectCategoria">
                                    <option>Mercado</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-c span1of3">
                        <Input
                            span="span1of2"
                            inputId="inputAgencia"
                            label="Agência"
                            type="text"
                            maxLength={4}
                            invalidMessage={'Inválido'}
                            required={false}
                        />
                        <Input
                            span="span1of2"
                            inputId="inputConta"
                            label="Conta"
                            type="text"
                            maxLength={6}
                            invalidMessage={'Inválido'}
                            required={false}
                        />
                    </div>
                </div>
                <div className="row-c">
                    {/* <div className="col-c span1of3"> */}
                        
                    {/* </div> */}
                </div>
                <div className="row-c text-center mt-4">
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Salvar</button>
                    </div>
                </div>
            </form>
       </div>
    );
}

export default Estabelecimento;