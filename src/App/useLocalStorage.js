import {useState, useEffect} from 'react'

function useLocalStorage(itemName, initialValue){
    const [loading, setLoading] = useState(true);
    const [Error, setError] = useState(false);
    const [item, setItem] = useState(initialValue);

    useEffect(()=>{
        console.log('ejecuta')
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parseItem;
                if(localStorageItem){
                    parseItem = JSON.parse(localStorageItem)
                }else{
                    localStorage.setItem(itemName,JSON.stringify(initialValue));
                    parseItem = initialValue
                }

                setItem(parseItem);
                setLoading(false);
            } catch (error) {
                setError(error);
                console.log(Error)
            }
        }, 1500);
    },[])


    const saveItem = (newItem) =>{
        try {
            const stringifyItem = JSON.stringify(newItem);
            localStorage.setItem(itemName,stringifyItem);
            setItem([...newItem])
        } catch (error) {
            setError(error);
        }
    }

    return {item,saveItem,loading};
}

export {useLocalStorage};