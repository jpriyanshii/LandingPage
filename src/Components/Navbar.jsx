import React from 'react';
import logo from '../assets/logo.png'

const Navbar=()=>{
    return(
     <>
        <nav class="bg-white">
           <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
              <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
       
                <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
                  <span class="absolute -inset-0.5"></span>
                  <span class="sr-only">Open main menu</span>
    
                 <svg class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        
          <svg class="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex shrink-0 items-center">
          <img class="h-8 w-auto" src={logo} alt="Your Company"/>
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">

            <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-black  hover:bg-gray-700 hover:text-white" aria-current="page">About</a>
            <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white">Tour</a>
            <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white">Package</a>
            <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white">Contact</a>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" class="bg-black p-3 relative inline-flex items-center justify-center rounded-lg text-white hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-expanded="false">
            Book Trip
        </button>
      </div>
    </div>
  </div>

 
  {/* <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pt-2 pb-3">
      
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 text-black hover:text-white" aria-current="page">About</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white">Tour</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white">Package</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white">Contact</a>
    </div>
  </div> */}
 </nav>
</>
 )
}
export default Navbar