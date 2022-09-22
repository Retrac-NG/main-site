import React from 'react'
import { CommunityData } from '../../data/landing.data'

const CommunityComponent = () => {

  return (
    <section className='landing__section-container'>
        <h2 className='landing__section-heading'>Our Community</h2>
        <p className=' -mt-4 text-gray-400 text-center text-md font-secondary'>see how fast our Community is growing and how much impact we have made.</p>
        <div className='grid grid-cols-3 gap-3 w-full'>
            {CommunityData && CommunityData.map((item, ind) => (
                <span key={ind} className="flex flex-col items-center justify-center text-center gap-3 max-w-[270px] px-4 py-5 ">
                    <p className='text-5xl font-black text-green-500 font-secondary '>{item.value}</p>
                    <h3 className='font-medium text-xl text-gray-800'>{item.title}</h3>
                    <p className='font-secondary text-sm text-gray-500 '>{item.content}</p>
                </span>
            ) )}
        </div>
    </section>
  )
}

export default CommunityComponent
