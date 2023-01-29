import './App.scss';

// Componentes
import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCounter/index.js'
import { TodoSearch } from '../TodoSearch/index.js'
import { TodoList } from '../TodoList/index.js'
import { TodoItem } from '../TodoItem/index.js'
import { CreateTodoButton } from '../CreateTodoButton/index.js'
import { Modal } from '../Modal/index.js'
import { TodoHeader } from '../TodoHeader/index.js'
import { TodoLoading } from '../TodoLoading/index.js'
import { ChangeAlert } from '../ChangeAlert/index.js'

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
					/>
					<TodoSearch
						searchValue={searchValue}
						setSearchValue={setSearchValue}
					/>
				</TodoHeader>

				<TodoList
					searchValue={searchValue}
					totalTodos={totalTodos}
					error={error}
					loading={loading}
					searchedTodos={searchedTodos}
					onError={() => <p>Desesperate, hubo un error...</p>}
					onLoading={() => <TodoLoading />}
					onEmptyTodos={() => <p>Crea tu primer Todo! :D</p>}
					onEmptySearchResults={(searchText) => <p>No hay resultados para: "{searchText}"</p>}
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
				{openModal &&
					<Modal setOpenModal={setOpenModal} addTodo={addTodo} cannotAddTodo={cannotAddTodo} setCannotAddTodo={setCannotAddTodo} />
				}

				<CreateTodoButton setOpenModal={setOpenModal} />
				<ChangeAlert saveTodos={saveTodos}/>
			</div>
		</div>
	)
}

export { App };
