import React from 'react';
import Modal from 'react-bootstrap4-modal';

const FeedbackMessage = props => {
    return (
        <Modal
            dialogClassName="modal-dialog-centered"
            visible={true}
            fade={true}
            onClickBackdrop={() => props.onClose()}
        >
            <div className="modal-header">
                <h5 className={`modal-title ${props.success ? 'text-success' : 'text-danger'}`}>{props.title}</h5>
            </div>
            <div className="modal-body">
                <p>{props.message}</p>
            </div>
            <div className="modal-footer">
                <button type="button" className={`btn ${props.success ? 'btn-success' : 'btn-danger'}`} onClick={() => props.onClose()}>
                    OK
                </button>
            </div>
        </Modal>
    );
}

export default FeedbackMessage;