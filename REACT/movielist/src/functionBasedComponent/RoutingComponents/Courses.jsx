import React from 'react'
import Layout from './Layout'
import { Outlet } from 'react-router-dom'

export default function Courses() {
  return (
    <Layout>
      <Outlet/>
    </Layout>
  )
}
