import React from 'react';
import style from './todo.module.css'
import TodoItem from './todoitem.jsx';





const Todo=()=>{
    let [newTodo,setnewTodo]=React.useState("")
    const [todos,setTodos]=React.useState([])
    
    const deleteitem=(id)=>{
        const deleteNewArrray=todos.filter(todo=>todo.id !==id)
        setTodos(deleteNewArrray)
    }
    // const handleChange = (e)=>{
    //     setnewTodo(e.target.value)
    // }

    return (
        <div className={style.maintodo}>
            TODO App
            <br/>
            <br/>
            {/* <input onChange={handleChange} /> */}

            <input className={style.frstip} placeholder='Enter Your TODO Here' onChange={(e)=>{setnewTodo(e.target.value)}} />
             
            <button className={style.btnadd} onClick={()=>{  
                setTodos([...todos,
                    {
                        id:Date.now(),
                        value:newTodo,  
                        isCompleted:false
                    }])
                    setnewTodo("")
            }} >
                +</button>
            {todos.map((todo)=>{
                return (
                      <TodoItem key={todo.id} todo={todo} deleteitem={deleteitem}/>
                )              
            })}
        </div>
    )
}
export default Todo