import './TodoItem.scss';
import checked from './assets/checked.svg';
import deleted from './assets/delete.svg';
function TodoItem(props){
    const checkTodo =()=>{
        if(props.completed === false){
            // busca el todo con el text correspondiente
            const todoIndex = props.todos.findIndex(todo => todo.text === props.text);
            // crea un nuevo arraya con el todo seleccionado con completed como true
            let newTodo = props.todos;
            newTodo[todoIndex].completed = true
            // setea mediante una props el nuevo array
            props.setTodos([...newTodo])
        }
    }
    const deleteTodo =()=>{
        let newTodos = props.todos.filter(todo => todo.text !== props.text);
        props.setTodos(newTodos)
    }
    return(
        <li className={`TodoItem ${props.completed && 'TodoItem-completed'}`} >
            <p>{props.text}</p>
            <div className='TodoItem__buttons'>
                <button onClick={checkTodo}>
                    <img src={checked} alt="check task" title='check task'/>
                </button>
                <button onClick={deleteTodo}>
                    <img src={deleted} alt="delete task" title='delete task'/>
                </button>
            </div>
            
        </li>
    );
}

export { TodoItem };