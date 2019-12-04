import React, { Fragment, useState } from 'react';
// import axios from 'axios';
import Octicon, { Trashcan } from '@primer/octicons-react';

import DeleteConfirmation from '../fragments/DeleteConfirmation';

const EstabelecimentoListItem = props => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleRemoveClick = () => {
        setShowDeleteModal(true);
    }

    return (
        <Fragment>
            <div className="row-c">
                <div className="row-c">
                    <a
                        href={`/estabelecimento/${props._id}`}
                        className="h5"
                    >
                        {props.fantasia}
                    </a>
                    <span className={`float-right badge ${props.ativo ? 'badge-success' : 'badge-danger'}`}>{props.ativo ? 'Ativo' : 'Inativo'}</span>
                </div>
                <div className="row-c pt-2">
                    <span className="pl-2">{props.cnpj}</span>
                    <span className="float-right pr-2">{props.telefone}</span>
                </div>
                <div className="row-c pt-2">
                    <span className="pl-2">{`${props.cidade} - ${props.estado}`}</span>
                    <button 
                        className="btn btn-link float-right text-danger" 
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Remover"
                        onClick={() => handleRemoveClick()}
                    >
                        <Octicon icon={Trashcan} />
                    </button>
                </div>
            </div>

            { showDeleteModal ?
                <DeleteConfirmation />
            : '' }
        </Fragment>
    );
}

export default EstabelecimentoListItem;