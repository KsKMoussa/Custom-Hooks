import { useEffect, useReducer } from "react"
import { TodoReducer } from "../07-useReducer/TodoReducer"

//const ini = ()=> {
 //   return JSON.parse(localStorage.getItem('todos') || [])
//}

const ini = () => {
    const storedData = localStorage.getItem('todos');
    return storedData ? JSON.parse(storedData) : [];
}

export const useTodoHooks = () => {

    const initialState=[
        {
            id: new Date().getTime(),
            description:'Obtener la Piedra del Alma',
            done:false
        },
        {
            id: new Date().getTime()*3,
            description:'Obtener la Piedra del poder',
            done:false
        }
    ]



    
    const [todos, dispatch] = useReducer(TodoReducer, initialState,ini)

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos) || [])
    }, [todos])

    const handleNewTodo = (e) => {
     
        const action ={
            type: '[TODO] Hacer Tarea',
            payload: e
        }
        
        dispatch(action);

       }

       const handleDeleteItems = (e) => {
      

        const action= {
            
                type:'[TODO] Borrar Tarea',
                payload : e
              
        }
  
        dispatch(action)

       }

       const handleToggleTodo = (id) => {

        const action= {
            
                type:'[TODO] Tarea Concluida',
                payload : id
              
        }
  
        dispatch(action)

     }
  return {handleNewTodo,
    handleDeleteItems,
    handleToggleTodo,
   todos,
   todoCount:todos.length,
   todoPendent:todos.filter(todos=>!todos.done).length}

  
}



