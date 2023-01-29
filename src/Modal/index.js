import { useState } from "react";
import ReactDOM from "react-dom";
import './Modal.scss'

function Modal({setOpenModal,addTodo,cannotAddTodo,setCannotAddTodo}) {
    const closeModal = ()=>{
        setOpenModal(false);
        setCannotAddTodo({error:false,errorMessage:""})
        setInputValue("");
    }
    const [inputValue,setInputValue] = useState("");
    const updatingInput=(event)=>{
        setInputValue(event.target.value);
    }
    const adding =()=>{
        if(inputValue.length > 0){
            addTodo(inputValue);
            setInputValue("");
        }

    };
    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal__window">
                <button onClick={closeModal} className="modal__window--close">x</button>
                <label>
                    <span>Add new Todo</span>
                    <input value={inputValue} onChange={updatingInput} type='text' placeholder="Add new Todo" aria-label="Add new todo"/>
                </label>
                <button className="modal__window--create" onClick={adding}>Create +</button>
                {cannotAddTodo.error && <p className="errorMessage">ERROR: {cannotAddTodo.errorMessage}</p>}
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export {Modal};