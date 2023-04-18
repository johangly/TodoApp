import './App.css';

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <h2>Has completado 2 de 3 TODO's</h2>
      <TodoSearch />
      <input placeholder='Cebolla'/>
      <TodoList>
        <TodoItem/>
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export {App};
