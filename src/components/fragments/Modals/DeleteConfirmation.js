import React from 'react';
import Modal from 'react-bootstrap4-modal';

const DeleteConfirmation = props => {
    return (
        <Modal
            dialogClassName="modal-dialog-centered"
            visible={true}
            fade={true}
            onClickBackdrop={() => props.onClose()}
        >
            <div className="modal-header">
                <h5 className="modal-title">Remover {props.nome}?</h5>
            </div>
            <div className="modal-body">
                <p>Essa ação não poderá ser desfeita.</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => props.onClose()}>
                    Não
                </button>
                <button type="button" className="btn btn-primary" onClick={() => props.onDelete()}>
                    Sim
                </button>
            </div>
        </Modal>
    );
}

export default DeleteConfirmation;