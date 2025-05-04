'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
 export  default  function StatTable({  }) {
  
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/count`);
        const data = await response.json();
        setArr(data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };
    fetchData();
  }, []);
  console.log(arr);
  return (
    <>
   <main className="stats-grid">
    <div className="card">
      <h2>Total Students</h2>
      <p className="stat-number">{arr[0]?.value}</p>
    </div>
    <div className="card">
      <h2>Total Students</h2>
      <p className="stat-number">{arr[1]?.value}</p>
    </div>
    <div className="card">
      <h2>Total Students</h2>
      <p className="stat-number">{arr[2]?.value}</p>
    </div>
    <div className="card">
      <h2>Total Students</h2>
      <p className="stat-number">{arr[3]?.value}</p>
    </div>
    <div className="card">
      <h2>Total Students</h2>
      <p className="stat-number">{arr[4]?.value}</p>
    </div>
    <div className="card">
      <h2>Total Students</h2>
      <p className="stat-number">{arr[5]?.value}</p>
      </div>
    <div className="card">
      <h2>Total Students</h2>
      <p className="stat-number">{arr[6]?.value}</p>
    </div>
    <div className="card">
      <h2>Total Students</h2>
      <p className="stat-number">1,200</p>
    </div>
    <div className="card">
      <h2>Total Students</h2>
      <p className="stat-number">1,200</p>
    </div>
    <div className="card">
      <h2>Total Students</h2>
      <p className="stat-number">1,200</p>
    </div>
  </main>

    </>
  );
}