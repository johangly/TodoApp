import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.scss';
function TodoCounter() {
    const {totalTodos, completedTodos} = useContext(TodoContext)
    return (
    <>
        <h2>Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODO's</h2>
    </>
    );
}

export { TodoCounter };