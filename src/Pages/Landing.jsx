import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Sky from '../Components/Sky'
import Socials from '../Components/Socials'
import Destination from '../Components/Destination'
import Journey from '../Components/Journey'
const Landing=()=>{
    return(
        <>
        <Navbar/>
        <Sky/>
        <Socials/>
        <Destination/>
        <Journey/>
        </>
    )
}
export default Landing