import React from "react";

const Modal =(isOpen, onClose, children) => {
    return (
        <div>
            {isOpen ? (
                <div>
                    <div>{children}</div>
                    <div onClick={() => onClose()} />
                </div>
            ) : null}
        </div>
    );
}

export default Modal;