import './CreateTodoButton.scss'
function CreateTodoButton(props){
    let addingTodo = () =>{
        alert("se agrega una Todo")
    }
    return(
        <button className='CreateTodoButton' onClick={addingTodo}>+</button>
    );
}

export { CreateTodoButton};