import './TodoList.scss'
function TodoList(props){
    return(
        <section>
            <ul className="TodoList">
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };