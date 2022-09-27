import React from 'react'

const Modal = ({ id, title, children, confirmBtn, confirmAction, autoClose = false, ref = null }) => {
    return (
        <div className="modal fade" id={id}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content uk-padding-small">
                    <h2 className="uk-modal-title">{title}</h2>

                    {children}

                    <p className="uk-text-right uk-margin-small-top">
                        <button className="btn-cancel" type="button" data-bs-dismiss="modal">Cancel</button>
                        <button className="btn-confirm" type="button" data-bs-dismiss={autoClose ? 'modal' : ''} onClick={() => confirmAction()}>{confirmBtn}</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Modal