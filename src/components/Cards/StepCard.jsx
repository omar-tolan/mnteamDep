import React from 'react'

function StepCard({step}) {
  return (
    <div className='bg-[rgba(55,55,55,0.5)] backdrop-blur-3xl rounded-2xl flex flex-row items-center justify-end px-2 py-4'>
      <p className='text-[16px] text-right'>{step}</p>
      <img src='assets/step.svg' className='h-[40px]'/>
    </div>
  )
}

export default StepCard
