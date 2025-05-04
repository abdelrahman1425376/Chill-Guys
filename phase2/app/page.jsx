import React from 'react'
import Link from 'next/link'
import StatTable from './components/StatTabel';
import NavBar from './components/NavBar';
export default async function meals() {
  return (
    <div className="app">
      <NavBar/>
      <div className="container">
        <h1>Student & Course Management - Statistics Dashboard</h1>
        <StatTable/>
      </div>
    </div>
  )
}
