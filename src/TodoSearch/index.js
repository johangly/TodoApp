import './TodoSearch.scss'

function TodoSearch({searchValue, setSearchValue}){
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