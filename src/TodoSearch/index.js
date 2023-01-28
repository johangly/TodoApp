import './TodoSearch.scss'
import { useContext } from 'react';
import { TodoContext } from '../TodoContext';

function TodoSearch(){
    const {searchValue, setSearchValue} = useContext(TodoContext);
    const onSearchValue =(event)=>{
        setSearchValue(event.target.value)
    }

    return(
        <>
            <div className='TodoSearch'>
                <input 
                    onChange={onSearchValue}
                    value={searchValue} 
                    className='TodoSearch__input'
                    placeholder="Search task"
                />
                <span></span>
            </div>
        </>
    );
}

export {TodoSearch};