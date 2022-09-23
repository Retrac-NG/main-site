import React from 'react'
import { aboutusdata } from '../../data/about.data'

const AboutusComponent = () => {
  return (
    <div className='landing__section-container xl:px-36'>
      <h1 className='landing__section-heading'>About Us</h1>
      {aboutusdata && aboutusdata.map((item, ind) => ( 
            <section key={ind} className='flex flex-shrink flex-col items-center ' >
           <p  className='text-gray-400 text-lg mt-4 font-secondary w-[65%] '>
            {item.text1}
          </p>
          </section>
            
      ))}
      
    </div>
  )
}

export default AboutusComponent
