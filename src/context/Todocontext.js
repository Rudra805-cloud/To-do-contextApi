import { createContext,useContext } from 'react';

export const todoContext=createContext({

    todos:[
        {
            id:1,
            todo:"todo massage",
            completed:false,
        }
      
    ],
    addTodo:(todo)=>{},
    updateTodo:(todo,id)=>{},
    deleteTodo:(id)=>{},
    toggle:(id)=>{}
});
export const usetodo=()=>{
    return useContext(todoContext);
}
export const TodoProvider=todoContext.Provider