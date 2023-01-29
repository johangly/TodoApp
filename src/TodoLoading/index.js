import React from 'react'
import './TodoLoading.scss'
function TodoLoading() {
    return (
        <>
            <p className='loadingMessage'>Estamos cargando, no desesperes...</p>
            <li className="loadingTodoItem">
            </li>
            <li className="loadingTodoItem">
            </li>
            <li className="loadingTodoItem">
            </li>
            <li className="loadingTodoItem">
            </li>
            <li className="loadingTodoItem">
            </li>
        </>
    )
}

export {TodoLoading}