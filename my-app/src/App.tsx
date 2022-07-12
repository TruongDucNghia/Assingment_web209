import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import LayoutClient from './components/layout/LayoutClient'

function App() {

  return (
    <Routes>
      <Route path='/' element={<LayoutClient/>}>
        <Route index element={<h1>Home page</h1>}/>
      </Route>
    </Routes>
  )
}

export default App
