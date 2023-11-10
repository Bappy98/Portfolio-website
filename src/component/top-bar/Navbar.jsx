import React from 'react'
import { Link } from 'react-scroll'
const navLink = [
    {name:'Home',id:'home'},
    {name:'About', id:'about'},
    {name:'Education',id:'education'},
  {name:'Contact',id:'contact'}
]
function Navbar() {
  return (
   <div className='flex bg-slate-600 p-4 justify-between top-0 left-0 z-50 fixed w-full mb-44'>
    <div className='text-3xl font-bold justify-center p-2 text-cyan-50'>Faysal</div>
    <div>
        <ul className='flex '>
        {navLink.map((link,i)=>(<li key={i}  className='p-2 bg-slate-400 m-1 rounded cursor-pointer'><Link to={link.id} smooth={true} duration={500}>{link.name}</Link></li>))}
        </ul>
    </div>
   </div>
  )
}

export default Navbar