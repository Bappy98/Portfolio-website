import React from 'react'
import myPhoto from './../../assets/image/299232368_1380185252473695_7852952670640423939_n.jpg'

function Home() {
  return (
    <div className='min-h-screen flex items-center justify-center flex-wrap flex-col sm:justify-between sm:flex-row-reverse relative top-[80px]' name='home'>
        <div className='w-[40%] '>
            <img src={myPhoto} className='rounded-full sm:h-64 shadow-md shadow-emerald-400' alt="bappy" />
        </div>
        <div className='w-[60%] justify-center flex flex-col items-center mt-8 '>
           <div>
           <div className='font-thin text-xl text-white mb-3'>Hi, i am</div>
            <div className='font-semibold text-3xl text-cyan-50'>Faysal Ahmed Bappy</div>
            <div className='font-semibold text-xl text-white'>Javascript Developer</div>
           </div>
        </div>
    </div>
  )
}

export default Home