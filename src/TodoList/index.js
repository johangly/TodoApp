import './TodoList.scss'
function TodoList(props){
    return(
        <section>
            <ul className="TodoList">
                {props.error && props.onErro()}
                {props.loading && props.onLoading()}
                {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
                {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchValue)}
                {props.searchedTodos.map(props.render ? props.render : props.children)}
            </ul>
        </section>
    );
}

export { TodoList };