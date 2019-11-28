import React from 'react';

const Estabelecimento = props => {
    return (
        <div>
            <h2 className="text-center">Estabelecimento</h2>
            <form className="container mt-4">
                <div className="form-group">
                    <label for="inputNomeFantasia">Nome fantasia</label>
                    <input type="text" className="form-control" id="inputNomeFantasia" maxLength="60"/>
                </div>
                <div className="form-group">
                    <label for="inputRazaoSocial">Razão social</label>
                    <input type="text" className="form-control" id="inputRazaoSocial" maxLength="80"/>
                </div>
                <div className="form-group">
                    <label for="inputCnpj">CNPJ</label>
                    <input type="text" className="form-control" id="inputCnpj" maxLength="14"/>
                </div>
                <div className="form-group">
                    <label for="inputEmail">E-mail</label>
                    <input type="email" className="form-control" id="inputEmail" maxLength="45"/>
                </div>
                <div className="form-group">
                    <label for="inputTelefone">Telefone</label>
                    <input type="text" className="form-control" id="inputTelefone" maxLength="11"/>
                </div>
                <div className="form-group">
                    <label for="inputEndereco">Endereço</label>
                    <input type="text" className="form-control" id="inputEndereco" maxLength="60"/>
                </div>
                <div className="form-group">
                    <label for="inputCidade">Cidade</label>
                    <input type="text" className="form-control" id="inputCidade" maxLength="32"/>
                </div>
                <div className="form-group">
                    <label for="selectEstado">Cidade</label>
                    <select className="form-control" id="selectEstado">
                        <option>São Paulo</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="inputAgencia">Agência</label>
                    <input type="text" className="form-control" id="inputAgencia" maxLength="4"/>
                </div>
                <div className="form-group">
                    <label for="inputConta">Conta</label>
                    <input type="text" className="form-control" id="inputConta" maxLength="6"/>
                </div>
                <div className="form-group">
                    <label for="dateCadastro">Cadastro</label>
                    <input type="date" className="form-control" id="dateCadastro"/>
                </div>
                <div className="form-group">
                    <label for="selectCategoria">Categoria</label>
                    <select className="form-control" id="selectCategoria">
                        <option>Mercado</option>
                    </select>
                </div>
                <div className="form-group">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="checkAtivo" name="Ativo"/>
                        <label class="custom-control-label" for="checkAtivo">Ativo</label>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </div>
            </form>
       </div>
    );
}

export default Estabelecimento;