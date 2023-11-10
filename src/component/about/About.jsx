import React from 'react'
import img from '../../assets/image/IMG_20221008_154853.jpg'
function About() {
  return (
    <div className='min-h-screen pt-[100px] m-4 flex justify-center flex-wrap items-center gap-2' id='about'>
        <div className='p-4'>
            <img src={img} className=' rounded-3xl w-60 shadow-md shadow-white' alt="faysal" />
        </div>
        <div className=' sm:w-[50%]'>
            <div className='font-semibold text-3xl text-white'>About</div>
            <p className='text-justify sm:mt-2 text-slate-200'>I am Faysal Ahmed Bappy.I am student. I love programming. I live in Trishal, Mymensingh</p>
            <div className='text-white text-xl font-semibold mt-4'>Skill</div>
            <div className='text-zinc-200'>competitive programming</div>
            <ul className='ml-8 text-slate-200'>
              <li>C</li>
              <li>C++</li>
            </ul>
            <div className='text-zinc-200'>Development</div>
            <ul className='ml-8 text-slate-200'>
              <li>JavaScript</li>
              <li>react</li>
              <li>tailwindcss</li>
            </ul>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default About