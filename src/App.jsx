import { useEffect, useState } from 'react'
import './App.css'
import  TodoProvider  from './context';
import  TodoForm  from './Component/TodoForm';
import  TodoItem  from './Component/TodoItem';
function App() {
  
  const [todos,setTodos]=useState([]);
  //creating methods

  const addTodo=(todo)=>{
     setTodos((previos)=>[{id:Date.now(),...todo},...previos])    //previos array me new value add kari ... spreade kiya
  }
  const updateTodo=(id,todo)=>{
    setTodos((previos)=>previos.map((item)=>
      // {previosTodo.id ===id ? todo  : previosTodo}
    {
      if(item.id!==id) 
        return todo
      
    }
    ))

  }
  const deleteTodo=(id)=>{  //means we create a new array in which expact the value that i want to delte all values are awilble
    setTodos((prev)=>prev.filter((item)=>{
    if(item.id!==id){
       return item
    }
    
   }))
  }
  const toggle=(id)=>{
    setTodos((prev)=>prev.map((item)=>item===id?{...item , completed:!item.completed}:item))
  }


  useEffect(() => {
   // localStorage.getItem("todos")=>this give values in string so we use JSoN.parse
  const todos= JSON.parse(localStorage.getItem("todos"))    //getdata

  if(todos&&todos.length>0){
    setTodos(todos);
  }
  }, [])
  useEffect(()=>{
localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
  

  return (
   <>
   <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggle}}>

    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
   </>
  )
}

export default App
