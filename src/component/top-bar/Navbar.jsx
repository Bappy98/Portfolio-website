import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './navbar.css'
const navLink = [
    {name:'Home',id:'home'},
    {name:'About', id:'about'},
    {name:'Education',id:'education'},
  {name:'Contact',id:'contact'}
]

function Navbar() {
  const [open,setOpen] = useState(false)
  console.log(open);
  return (
  <nav className='w-full fixed top-0 left-0 shadow-md z-50' >
     <div className='sm:flex items-center justify-between max-w-7xl m-auto sm:mx-4 my-4 '>
    <div className='text-white font-semibold text-3xl p-3'>Faysal</div>
    <div className={`absolute top-6 right-6 cursor-pointer sm:hidden text-2xl text-white `}  onClick={()=>setOpen(!open)}> <ion-icon name={open?'close':'menu'}></ion-icon></div>
      
      <ul className={`sm:flex sm:items-center absolute sm:static top-8 w-full sm:w-auto text-white sm:bg-slate-800/50 bg-slate-700  ${open?'top-[65px]':'top-[-399px]'} duration-200`}>
        {navLink.map((link,i)=>(<li key={i}  className=' cursor-pointer p-4 hover:bg-slate-600 rounded-lg'><Link to={link.id} smooth={true} duration={500}>{link.name}</Link></li>))}
        </ul>
      </div>
   
   
  </nav>
  )
}

export default Navbar