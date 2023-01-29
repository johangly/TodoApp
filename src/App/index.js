import './App.scss';

// Componentes
import { useTodos } from './useTodos';
import {TodoCounter} from '../TodoCounter/index.js'
import {TodoSearch} from '../TodoSearch/index.js'
import {TodoList} from '../TodoList/index.js'
import {TodoItem} from '../TodoItem/index.js'
import {CreateTodoButton} from '../CreateTodoButton/index.js'
import {Modal} from '../Modal/index.js'
import {TodoHeader} from '../TodoHeader/index.js'
import {TodoLoading} from '../TodoLoading/index.js'

// function App(){
//   const [state,setState] = useState('Hola Mundo');

//   return(
//     <>
//       <TodoHeader>
//         <TodoSearch/>
//         <TodoCounter/>
//       </TodoHeader>
//       <TodoList>
//         <TodoItem state={state}/>
//       </TodoList>
//     </>

//   )
// }

// function TodoHeader({children}){
//   return(
//     <header>
//       {children}
//     </header>
//   )
// }

// function TodoList({children}){
//   return(
//     <section className='TodoList-container'>
//       {children}
//     </section>
//   )
// }


// function TodoCounter(){
//   return(
//     <>
//       <p>TodoCounter</p>
//     </>
//   )
// }

// function TodoSearch(){
//   return(
//     <>
//       <p>TodoSearch</p>
//     </>
//   )
// }
// function TodoItem({state}){
//   console.log(state)
//   return(
//     <>
//       <p>TodoItem:{state}</p>
//     </>
//   )
// }

function App() {
  const {
    error,
    loading,
    searchedTodos,
    todos,
    saveTodos,
    openModal,
    setOpenModal,
    addTodo,
    cannotAddTodo,
    setCannotAddTodo,
    totalTodos,
    completedTodos,
    searchValue, 
    setSearchValue,
  } = useTodos();

  return (
    <div className="App">
        <div className='Todo'>
            <TodoHeader loading={loading}>
                <TodoCounter 
                  totalTodos={totalTodos} 
                  completedTodos={completedTodos} 
                  // loading={loading}
                />
                <TodoSearch 
                  searchValue={searchValue} 
                  setSearchValue={setSearchValue} 
                  // loading={loading}
                />
            </TodoHeader>

            <TodoList 
              searchValue={searchValue}
              totalTodos={totalTodos}
              error={error}
              loading={loading}
              searchedTodos={searchedTodos}
              onError={()=> <p>Desesperate, hubo un error...</p>}
              onLoading={()=> <TodoLoading/>}
              onEmptyTodos={()=> <p>Crea tu primer Todo! :D</p>}
              onEmptySearchResults={(searchText)=> <p>No hay resultados para: "{searchText}"</p>}
              // render={ todo => (
              //   <TodoItem 
              //       key={todo.text}
              //       text={todo.text}
              //       completedTodo={todo.completed}
              //       todos={todos}
              //       saveTodos={saveTodos}
              //   />
              // )}
            >

              {todo => (
                <TodoItem 
                    key={todo.text}
                    text={todo.text}
                    completedTodo={todo.completed}
                    todos={todos}
                    saveTodos={saveTodos}
                />
              )}
            </TodoList>
            {/* <TodoList>
                {error && <p>Desesperate, hubo un error...</p>}
                {loading && <p>Estamos cargando, no desesperes...</p>}
                {(loading === false && !searchedTodos.length) && <p>Crea tu primer Todo! :D</p>}
                {searchedTodos.map(todo => (
                    <TodoItem 
                    key={todo.text}
                    text={todo.text}
                    completedTodo={todo.completed}
                    todos={todos}
                    saveTodos={saveTodos}
                    />
                ))}
            </TodoList> */}
            {openModal && 
                <Modal setOpenModal={setOpenModal} addTodo={addTodo} cannotAddTodo={cannotAddTodo} setCannotAddTodo={setCannotAddTodo}/>
            }
            
            <CreateTodoButton setOpenModal={setOpenModal}/>
        </div>
    </div>
)
}

export {App};
