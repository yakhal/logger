function Modal(props){
    return (
        <div className="overlay">
                <div className="modal">
                    <p>{props.value}</p>
                    <button onClick={props.closeModal}>OK</button>
                </div>
            </div>
    );
}

export default Modal;