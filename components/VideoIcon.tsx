
import React, {  useState } from 'react';
import { NextPage } from "next";


function VideoIcon({Icon}) {
    const [isActive,setIsActive]=useState(false)
  return (
    <div className='flex font-sans text-lg text-center pt-4'>
    <div onClick={()=>{setIsActive(!isActive)}}  className={isActive? 'bg-black rounded-full p-2 md:p-4 text-[#F51997] ':'bg-primary rounded-full p-2 md:p-4 text-[#F51997] '} >
        <Icon  className={isActive?'text-lg md:text-2xl text-red-50':'text-lg md:text-2xl'} />
    </div>
    </div>
      

  )
}

export default VideoIcon