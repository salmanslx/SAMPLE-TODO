import { useState } from 'react';
import './App.css';

function App() {
  const [todo,setTodo]= useState('')
  const [todos,setTodos] = useState([])
  const [editId,setEditId] = useState(0)

  const addTodo = ()=>{
    if(todo?.length>0){
    setTodos([...todos,{id:Date.now(),text:todo}])
    setTodo('')
  }
  if(editId){
    const editTodo = todos.find(item=>item.id===editId )
    const updateTodo = todos.map(task=>task.id===editTodo.id
      ? (task = {id : task.id , text : todo})
      : (task = {id : task.id , text : task.text}))
      setTodos(updateTodo)
      setEditId(0)
      setTodo('')
  }
  }

  const handleDelete = (id)=>{
    const upadatedArray = todos.filter(item=>item.id!==id) 
    setTodos(upadatedArray)
  }
  const handleEdit = (id)=>{
    const todoToEdit = todos.find(item=>item.id===id )
    setTodo(todoToEdit.text)
    setEditId(todoToEdit.id)
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <div className='p-2 w-72 bg-white mt-20 mb-5 rounded-full'>
          <h1 className='text-black text-4xl text-center'>TODO LIST</h1>
        </div>
         <div className='flex items-center justify-center w-1/2'>
            <input value={todo} onChange={(e)=>setTodo(e.target.value)} className='w-full p-3 rounded-full font-semibold' type="text" />
            <span onClick={addTodo} style={{marginLeft:'-40px'}} className=' bg-red-500 rounded-full'><i class="fa-solid fa-plus p-2"></i></span>   
         </div>
         <div className='w-1/2 mt-12'>
          <ul>
            {
              todos?.length>0?
              todos?.map((item)=>(
                <li key={item.id} className='p-3 rounded w-full flex justify-between bg-white mb-2'>{item.text} 
                <span>
                  <i onClick={()=>handleEdit(item.id)} class="fa-solid fa-pen-to-square"></i>
                  <i onClick={()=>handleDelete(item.id)} className="fa-solid fa-trash ms-3 text-red-800"></i> 
                </span>
                </li>
              ))  
              : <div className='p-2 bg-red-500 text-black text-center'>
                <p>Nothing To Do</p>
              </div>
            }
          </ul>
         </div>
      </div>
    </>
  );
}

export default App;
