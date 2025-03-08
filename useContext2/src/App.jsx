import React from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import Home from './pages/Home'
import Additem from './pages/Additem'
import Edititem from './pages/Edititem'
import CrudProvider from '../CrudProvider'


const App = () => {
  return (
    <BrowserRouter>
    <CrudProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="additem" element={<Additem/>}/>
        <Route path='edititem' element={<Edititem/>}/>
        <Route path='crudprovider' element={<CrudProvider/>}/>
      </Routes>
    </CrudProvider>
    </BrowserRouter>
  )
}

export default App
