import React from 'react'
import sky from '../assets/sky.jpg'
import plane from '../assets/plane.png'

const Sky=()=>{
    return(
       <>
       <img src={sky} alt="sky" className='w-full h-[50%] object-cover absolute rounded-lg'/>
         <img src={plane} alt="plane" className='w-1/2 h-1/2 absolute right-0'/>
         <div className='absolute w-[20rem] h-[5rem] text-white font-bold text-4xl left-[2rem] top-[8rem] '>
            <p className='text-sm font-medium text-black'>Elevate your travel journey</p>
            <h1 className='text-black'>Experience</h1>
            <h1 className='text-black'>The Magic Of</h1>
            <h1 className='text-black'>Flight!</h1>
            <button className='w-[6rem] h-[2rem] text-[0.6rem] bg-blue-600 text-white rounded-2xl mt-4'>Book A Trip Now</button>
         </div>

       </>
    )
}
export default Sky