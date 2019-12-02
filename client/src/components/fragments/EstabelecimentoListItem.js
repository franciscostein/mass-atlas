import React from 'react';
import Octicon, { Trashcan } from '@primer/octicons-react';

const EstabelecimentoListItem = props => {
    return (
        <div className="row-c">
            <div className="row-c">
                <a className="h5" href="#">{props.fantasia}</a>
                <span className={`float-right badge ${props.ativo ? 'badge-success' : 'badge-danger'}`}>{props.ativo ? 'Ativo' : 'Inativo'}</span>
            </div>
            <div className="row-c pt-2">
                <span className="pl-2">{props.cnpj}</span>
                <span className="float-right pr-2">{props.telefone}</span>
            </div>
            <div className="row-c pt-2">
                <span className="pl-2">{`${props.cidade} - ${props.estado}`}</span>
                <a href="#" className="float-right text-danger" data-toggle="tooltip" data-placement="left" title="Remover">
                    <Octicon icon={Trashcan} />
                </a>
            </div>
        </div>
    );
}

export default EstabelecimentoListItem;