import './CreateTodoButton.scss'
function CreateTodoButton(props){
    let addingTodo = () =>{
        props.setOpenModal(true);
    }
    return(
        <button className='CreateTodoButton' onClick={addingTodo}>+</button>
    );
}

export { CreateTodoButton};