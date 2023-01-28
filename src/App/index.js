import './App.scss';
import AppUI from './AppUI'
import {TodoProvider} from '../TodoContext'

function App() {
  
  return (
    //! aqui le mandas a la interfaz todos los datos que requiere
    <TodoProvider>
        <AppUI />
    </TodoProvider>

  );
}

export {App};
