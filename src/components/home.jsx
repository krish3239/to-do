import React ,{useEffect, useState} from 'react'
import Task from "./task"

function Home() {
  const [tasks,setTasks]=useState(localStorage.getItem("tasks")?
  JSON.parse(localStorage.getItem("tasks")):[]);
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");

  const submit=(e)=>{
    e.preventDefault();
    setTasks([...tasks,{
      title,
      description
    }]);
    setDescription("");
    setTitle("");
   
  }
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks]);

  const deleteTask=(index)=>{
      const filtered=tasks.filter((val,i)=>{
          return i!==index;
      });
      setTasks(filtered);
  }

  return (
    <div className='container'>
        <h1>Daily Goals</h1>
        <form onSubmit={submit}>

            <input type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}   />


            <textarea placeholder='Description'
            value={description} onChange={(e)=>setDescription(e.target.value)} 
            ></textarea>


            <button type='submit'>ADD</button>
        </form>


        {tasks.map((item,index)=>(
        <Task key={index} title={item.title} description={item.description} index={index} deleteTask={deleteTask}/>
        ))}
        
    </div>
  )
}

export default Home;