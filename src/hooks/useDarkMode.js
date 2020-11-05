import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (key, initialValue) => {
    const[someValue, setSomeValue] = useLocalStorage(key, initialValue)

    useEffect(() => {
        if(someValue){
            document.body.classList.add('dark-mode')
        }else{
            document.body.classList.remove('dark-mode')
        }
    }, [someValue]);

    return[someValue, setSomeValue];
}