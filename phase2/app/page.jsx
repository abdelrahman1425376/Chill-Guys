import React from 'react'
import Link from 'next/link'
import StatTable from './components/StatTabel';
export default async function meals() {
  return (
    <div className="app">
      <div className="container">
        <h1>Student & Course Management - Statistics Dashboard</h1>
        <StatTable/>
      </div>
    </div>
  )
}
