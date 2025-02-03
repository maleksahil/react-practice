import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [forminput,setFormInput] = useState([
    {id :  '',name : '',phone:''},
  ])

  const addField = () => {
    let newField = {
          id : Math.floor(Math.random()*10000000),
          name : '',
          phone : ''
    }
    setFormInput([...forminput,newField])
  }
  //delete field
  const removeField = (id) => {
    let deleterecord = forminput.filter(val => val.id != id);
    alert("delete Field");
    setFormInput(deleterecord)
  }
  return (
    <>
        <div align="center" className='bg-blue-400 text-white rounded p-10'>
        <h2>Dynamic form</h2>
        {
          forminput.map((val,index)=>{
            return (
              <tr className='flex items-center justify-around'>
                    <td>Name :- </td>
                    <td><input className='border-2 border-black rounded mb-5 ' type="text" name="name" /></td>
                    <td>Phone : </td>
                    <td><input className='border-2 border-black rounded mb-5 mr-5' type="number" name="phone" /></td>
                    <td>
                      {
                          index == 0 ? (
                              ""
                          ) : (
                            <button className='border-2 border-black rounded mb-5 px-5 cursor-pointer' onClick={ () => removeField(val?.id) }>X</button>
                          )
                      }
                    </td>
              </tr>
            )
          })
        }  
          <button className='border-2 border-black rounded px-2 cursor-pointer' onClick={ () => addField() }>Add</button>
        </div>
    </>
  )
}
export default App