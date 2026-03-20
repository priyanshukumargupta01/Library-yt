import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='flex justify-between bg-cyan-900 py-4 px-8'>
      <h2 className='text-xl font-bold'>Priyanshu</h2>
      <div className='flex gap-8'>
        <a></a> <Link  className='text-lg font-bold'  to="/">Home</Link>
        <a className='text-lg font-bold' href="/About">About</a>
        <a className='text-lg font-bold' href="/Contact">Contact</a>
      </div>
    </div>
  )
}

export default Navbar