import React from 'react'
import { useTransition } from 'react'
import { useState } from 'react'

const App = () => {
  
  const [query, setQuery] = useState("");
  const [filterdItems, setFilteredItems] = useState([]);
  const [isPending, startTransition] = useTransition();

  const items = Array.from({length: 10000}, (_, i) => `Item ${i + 1}`);

  const handleSearch = (e) =>{
    setQuery(e.target.value);

    //start transition to avoid blocking UI
    startTransition(()=>{
      setFilteredItems(
        items.filter((item)=>item.toLowerCase().includes(e.target.value.toLowerCase()))
      )
    })
  }

  return (
    <div>
       <input type='text' value={query} onChange={handleSearch} placeholder='Search...'/>
       {isPending && <p>Loading...</p>}
       <ul>
          {filterdItems.map((item, index)=>(
            <li key={index}>{item}</li>
          ))}
       </ul>
    </div>
  )
}

export default App
