import React from 'react'
import Typed from 'react-typed';

const Banner = () => {
  return (
    <div className='bg-[#4a62ff] w-full py-[60px]'>
        <div className="max-w-[1340px] py-[40px] mx-auto text-center font-bold">
            <div className='text-xl md:p-[24px] md:text-3xl'>Learn with us</div>
            <h2 className='text-white text-5xl md:text-[80px] md:p-[24px]'>Grow with us</h2>
            <div className='text-[20px] md:text-[50px] md:p-[24px] text-white'>
                Learn
                <Typed className='pl-3'
                    strings={['Web Development','Full Stack Development','MERN Stack Development']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={100}
                />
            </div>
            <button className='bg-black text-white p-3 rounded'>Get started</button>
        </div>
    </div>
  )
}

export default Banner