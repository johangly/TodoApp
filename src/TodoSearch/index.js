import './TodoSearch.scss'

function TodoSearch({searchValue, setSearchValue,loading}){
	const onSearchValue =(event)=>{
		setSearchValue(event.target.value)
	}

	return(
		<>
			<div className='TodoSearch'>
				<input 
					disabled={loading}
					onChange={onSearchValue}
					value={searchValue} 
					className={`TodoSearch__input ${loading && "TodoSearch__loading"}`}
					placeholder="Search task"
				/>
				<span></span>
			</div>
		</>
	);
}

export {TodoSearch};