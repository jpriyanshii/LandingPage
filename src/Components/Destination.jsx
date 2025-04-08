import React from 'react';
import boat from '../assets/boat.jpg'
import boat2 from '../assets/boat2.jpg'
import boat3 from '../assets/boat3.jpg'

const Destination = () => {
  return (
<>
    <div>
        <div className='mt-[3rem] ml-[3rem]'>
           <h1 className="text-2xl font-bold mb-2">Popular Destinations</h1>
           <p className="text-[12px]">Unleash your wanderlust with SkyWings!</p>
        </div>

        <div className='flex justify-around mt-[2rem]'>
            <div className='w-[20rem] h-[20rem] bg-white rounded-lg '>
                <img src={boat} alt="boat" className='w-full h-[60%] object-cover rounded-2xl'/>
                <h1 className='text-center font-bold text-lg mt-2'>Forest Wild Life</h1>
                <p className='text-center text-gray-500 text-sm'>NRT, Indonesia</p>
            </div>

            <div className='w-[20rem] h-[20rem] bg-white rounded-lg '>
                <img src={boat2} alt="boat" className='w-full h-[60%] object-cover rounded-2xl'/>
                <h1 className='text-center font-bold text-lg  mt-2'>Forest Wild Life</h1>
                <p className='text-center text-gray-500 text-sm'>NRT, Indonesia</p>
            </div>

            <div className='w-[20rem] h-[20rem] bg-white rounded-lg'>
                <img src={boat3} alt="boat" className='w-full h-[60%] object-cover rounded-2xl'/>
                <h1 className='text-center font-bold text-lg  mt-2'>Forest Wild Life</h1>
                <p className='text-center text-gray-500 text-sm'>NRT, Indonesia</p>
            </div>
    </div>
</div>

</>
  );
}
export default Destination;