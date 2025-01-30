import React from 'react'
import { useState } from 'react'

const App = () => {

  const[task,setTask] = useState("");
  const [record,setRecord] = useState([]);
  const[editid,setEditid] = useState("")

  const handleSubmit = (event) =>{
    event.preventDefault();

    let dup = record.filter((val)=>{
      return val.task == task
    })

    if(dup.length == 1){
      alert("Task aleardy exist")
      return false;
    }
    let obj ={
      taskid: Math.floor(Math.random()*1000000),
      task : task
    }

    if(editid){
      let up = record.map((val)=>{
        if(val.taskid == editid){
          val.task = task
        }
        return val
      })
      setRecord(up)
      // alert('record updated')
      setEditid("")
      setTask("")
    }else{
      setRecord([...record, obj]);
      setTask("")
    }

    setRecord([...record,obj]);
    
    console.log(record)
    setTask("")
  }

  const handleDelete=(id)=>{
       const updateRercord = record.filter(val=>val.taskid !== id)
      //  alert("record deleted")
       setRecord(updateRercord)
  }

  const handleEdit=(id)=>{
    const updateRercord = record.filter(val=>val.taskid !== id)
    //  alert("record deleted")
     setRecord(updateRercord)
    let single = record.find(val=>val.taskid==id);
    setEditid(id)
    setTask(single.task)
  }


  return (
    <div>
      <form  className='bg-slate-500 flex justify-center items-center' onSubmit={handleSubmit}>
        <input className='border-0 border-black m-10 bg-white rounded-4xl p-1 pl-1' type="text" onChange={(e)=> setTask(e.target.value)} value={task}></input> 
        <input className='bg-white rounded-2xl p-2 cursor-pointer' type='submit'></input>
      </form>

      <div className='bg-pink-200 flex  flex-col pl-170'>
         {
          record.map((val,index)=>{
            return(
              <div className='task'>
              <span className='mx-5'>{val.taskid}</span>
              <span className='mx-5 w-[500px]'>{val.task}</span>
              <button className='m-1 bg-blue-300 text-white rounded p-1 cursor-pointer' onClick={() => handleDelete(val.taskid)}>Delete</button>
              <button className='m-1 bg-blue-300 text-white rounded p-1 cursor-pointer' onClick={() => handleEdit(val.taskid)}>Edit</button>
              </div> 
            )
          })
         }
      </div>
    </div>
  )
}

export default App
