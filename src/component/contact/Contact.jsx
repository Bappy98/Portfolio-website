import React from 'react'
const logo = [
    {
        name:'logo-github',
        link:''
    },
    {
        name:'logo-facebook',
        link:''
    },
    {
        name:'logo-youtube',
        link:''
    },
    {
        name:'mail-open-outline',
        link:''
    },

]
function Contact() {
  return (
    <div id='contact' className='flex flex-col justify-center items-center'>
        <div className='font-semibold text-3xl mt-12 text-slate-200'>Contact</div>
        <div className='text-lg text-sky-300 mt-16'>
           <p> Name:Faysal Ahmed Bappy</p>
           <p>Phone: 013xxxxxxx</p>
           <p>Gmail: faysalahmed.cse.98@gmail.com</p>

        <div className='m-4 '>
           {logo.map((logo,i)=>(
            <a href={logo.link} key={i} className='p-2 hover:text-green-700'><ion-icon name={logo.name}></ion-icon></a>
           ))}
        </div>
        </div>
    </div>
  )
}

export default Contact