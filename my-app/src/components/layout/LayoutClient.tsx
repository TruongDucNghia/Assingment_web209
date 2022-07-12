import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'

type Props = {}

const LayoutClient = (props: Props) => {
  return (
    <>
        <Header/>
        <Outlet/>
        <h1>Footer</h1>
    </>
  )
}

export default LayoutClient