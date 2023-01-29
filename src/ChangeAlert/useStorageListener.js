import React from 'react'
import { useState } from 'react'

function useStorageListener() {
  const [storageChange, setStorageChange] = useState(false);
  const [newChanges, setNewChanges] = useState(false);

  window.addEventListener('storage',(change)=>{
    let changes = JSON.parse(change.storageArea.TODOS_V1)
    if(change.key === 'TODOS_V1'){
      setNewChanges(changes);
      setStorageChange(true);
    }
  })

  return {
    show:storageChange,
    toggleShow:setStorageChange,
    newChanges:newChanges,
  }
}

export {useStorageListener}
