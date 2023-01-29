import React from 'react'
import './ChangeAlert.scss'
import {useStorageListener} from './useStorageListener.js'

function ChangeAlert({saveTodos}) {
  const {show,toggleShow,newChanges} = useStorageListener();
  if(show){
    return (
      <div className='localStorageAlert'>
        <div>
          <p>Hubo cambios, Carga la nueva informacion</p>
          <button 
            onClick={()=>{toggleShow(false);saveTodos(newChanges)}}
          >Cargar cambios</button>
        </div>
      </div>
    )
  }else{
    return null;
  }
}

export {ChangeAlert};