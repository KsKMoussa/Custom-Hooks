import { useState } from "react"



export const useCounter = (valueDefect=10)=> {

    const [counter,setCounter]= useState(valueDefect)

    const incrementar= (value)=> {
        setCounter(counter+value)
    };

    const disminuir= (value)=> {
        if (counter===0) return;
        setCounter(counter-value)
    };

    const reset= ()=> {
        setCounter(valueDefect)
    };

    return {
        counter,
       incrementar,
       disminuir,
       reset

    }
} 