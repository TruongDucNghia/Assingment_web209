import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import LayoutAdmin from './components/layout/LayoutAdmin'
import LayoutClient from './components/layout/LayoutClient'
import AddCategories from './page/admin/Categorys/AddCategories'
import ListCategories from './page/admin/Categorys/ListCategories'
import Dashboard from './page/admin/Dashboard'
import ListProducts from './page/admin/Products'
import AddProduct from './page/admin/Products/AddProduct'

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<LayoutClient/>}>
        <Route index element={<h1>Home page</h1>}/>
      </Route>


      <Route path='/admin' element={<LayoutAdmin/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='products'>
          <Route index element={<ListProducts/>}/>
          <Route path='add' element={<AddProduct/>}/>  
          <Route path=':id/update' element={<AddProduct/>}/>  
        </Route>
        <Route path='categories'>
          <Route index element={<ListCategories/>}/>
          <Route path='add' element={<AddCategories/>}/>  
          <Route path=':id/update' element={<AddCategories/>}/>  
        </Route>
      </Route>
    </Routes>
  )
}

export default App
