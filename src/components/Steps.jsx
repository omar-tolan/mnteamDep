import React from 'react'
import StepCard from './Cards/StepCard'

function Steps() {
  return (
    <div>
      <p className='text-black text-[35px] text-center mb-4 mt-4 md:text-[50px] md:mb-10'>إزاي أبدا الرحلة</p>
      <div className='flex flex-col w-full px-4'>
        <div className='steps-image flex flex-col w-full px-6 py-6 space-y-4 rounded-3xl md:flex-row md:space-x-4 md:h-[30vh]'>
            <StepCard step='اشترك في الباقة المناسبة ليك من خلال موقعنا'/>
            <StepCard step='إبعت صورة إيصال الاشتراك على الواتساب'/>
            <StepCard step='هنتواصل معاك وياخد منك القياسات والاختبارات المطلوبة للبدأ في تجهيز البرنامج.'/>
            <StepCard step='استلم برنامجك التدريبي وابدا الرحلة اللي هتغيرلك حياتك'/>
            <StepCard step='اتفرج على جسمك وهو بيتطور'/>
        </div>
      </div>
    </div>

  )
}

export default Steps
