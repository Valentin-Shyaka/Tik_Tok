import React from 'react'
interface IProps {
    text: string
}

const NoResults = ({text}: IProps) => {
  return (
    <div className='text-3xl font-bold  h-[100vh]   text-center justify-center align-middle'>
     <div className='p-40 flex gap-2 '> 
     <p>NoResults</p>
     <span className='text-red-400'>Found</span>
     
     </div>
      </div>
  )
}

export default NoResults