import { Children, cloneElement } from 'react';
import './TodoHeader.scss'
function TodoHeader({children,loading}) {
    return (
        <header className='TodoHeader'>
            {
                Children.toArray(children).map(child => (
                    cloneElement(child, {loading})
                ))
            }
        </header>
    )
}

export {TodoHeader};
