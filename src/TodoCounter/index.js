import './TodoCounter.scss';
function TodoCounter({totalTodos,completedTodos,loading}) {
    return (
    <>  
        {loading 
            ? <h2>Cargando...</h2>
            :<h2>Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODO's</h2>
        }
    </>
    );
}

export { TodoCounter };