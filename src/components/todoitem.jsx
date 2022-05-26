import React from 'react'
import style from './todo.module.css'



const TodoItem = ({todo,deleteitem}) => {
    const [isCompleted,setIsCompleted]=React.useState(todo.isCompleted)
  return (
    <div className={style.todo} key={todo.id}>
    <input type="checkbox"   onChange={(e)=>{
        setIsCompleted(e.target.checked)
    }}/>
    <div className={isCompleted ? style.striked : "" }>{todo.value}</div>
    <button className={style.deletebtn} onClick={()=> deleteitem(todo.id)}>Delete</button>
    </div>
  )
}

export default TodoItem