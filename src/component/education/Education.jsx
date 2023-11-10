import React from 'react'
import img from '../../assets/image/education-pic_orig.jpg'
import img1 from '../../assets/image/download (2).jpg'
import img2 from '../../assets/image/download (1).jpg'
import img3 from '../../assets/image/download.jpg'
const institution = [
  {
    image:img1,
    name:'College of Business Science & Technology',
    degree:'BSC in CSE',
    session:'2018-19',
    graduation:'running'
  },
  {
    image:img2,
    name:'Alamgir Monsur Mintu Memorial College',
    degree:'HSC',
    session:'2018',
    graduation:'Complete'
  },
  {
    image:img3,
    name:'mukul niketon high school mymensingh',
    degree:'SSC',
    session:'2016',
    graduation:'Complete'
  }
]
function Education() {
  return (
   <div className='min-h-screen flex flex-col justify-center items-center pt-[100px]' name='education'>
    <div className='flex items-center justify-center flex-col mb-12'>
      <div className='font-semibold text-3xl text-white mb-12'>Education</div>
      <img src={img} className='h-32 shadow-md shadow-white rounded-md' alt="" /> 
    </div>
     <div className='flex flex-wrap justify-center items-center'>
      {institution.map((school,i)=>(
         <div className='h-80 w-80 bg-slate-500 flex flex-col justify-center items-center m-4 rounded-lg shadow-md shadow-slate-300' key={i}>
         <img src={school.image} className='h-44 w-32 ' alt="" />
         <div className='text-white pt-4'>
           <p>{school.name}</p>
           <p>Degree: {school.degree}</p>
           <p>Session: {school.session}</p>
           <p>Graduation: {school.graduation}</p>
         </div>
       </div>
      ))}
      </div>
   </div>
  )
}

export default Education