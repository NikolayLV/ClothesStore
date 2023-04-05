import style from "./Modal.scss";
import React from "react";
import product from "../Shop/Product/product";


const Modal = ({active, setActive}) => {
    return(
        <div className={active ? "modal active" : "modal" } onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <p>123</p>
            </div>
        </div>

    )
}


export default Modal;