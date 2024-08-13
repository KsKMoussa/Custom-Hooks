import { useState } from "react";

export const useFormHooks = (initialValue={}) => {

    const [formState,setFormState]=useState(initialValue)
 

    const onChangeValue = (e)=> {
      
        const {name,value}=e.target;

        setFormState({
            ...formState,[name]:value
        })
    }

    const onResetForm = ()=> {
   
    setFormState(initialValue)
       
    }
    

  return {
    formState,
    onChangeValue,
    onResetForm,
    ...formState
  }
}






