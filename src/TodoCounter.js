import './TodoCounter.scss';
function TodoCounter({total, completed}) {
    return (
    <>
        <h2>Has completado <span>{completed}</span> de <span>{total}</span> TODO's</h2>
    </>
    );
}

export { TodoCounter };