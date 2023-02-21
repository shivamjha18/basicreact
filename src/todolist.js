import React, { useState } from "react";

export function Todo(){
    const[todoList,setTodoList]=useState([]);
    const[newTask,setNewTask]=useState("");
    // const[changecolor,setChangeColor]=useState("white");
   

    const handlechange=(event)=>{
        setNewTask(event.target.value);

    }

    const addTask=()=>{
        const task={
            id:todoList.length===0?1:todoList[todoList.length-1].id+1,
            taskname:newTask,
            completed:false,
        }
        const newtodolist=[...todoList,task]
        setTodoList(newtodolist);

    }

    const deleteTodo=(id)=>{
        const newarray=todoList.filter((task)=>{
            // if(task===taskname){
            //     return false;
            // }
            // else{
            //     return true;
            // 
        // }
        return task.id!==id
        })
        setTodoList(newarray)

    }
const completed=(id)=>{
    setTodoList(
        todoList.map((task)=>{
            if(task.id===id){
                
                return{...task,completed:true};
                
            }
            else{
                return false;
            }
        })
    )
    
}

    return(
        <div className="center">
            <div className="addTask">
                <input onChange={handlechange}/>
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="list">
                {todoList.map((task)=>{
                   return <div>
                    <h2>{task.taskname}</h2>
                    <button  onClick={()=>completed(task.id)} className="btn btn-secondary">completed</button>
                    <button onClick={()=>deleteTodo(task.id)} className="btn btn-primary">delete</button>
                    </div>
                })}
                

            </div>
        </div>
    )
}