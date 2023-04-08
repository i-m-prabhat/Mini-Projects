import React from 'react'
import laptop from "../assets/img/laptop.png"
const Experts = () => {
  return (
    <div className='max-w-[1240px] mx-auto my-10 md:grid grid-cols-2'>
        <div className=' col-span-1 md:w-[80%]'>
            <img src={laptop} alt="laptop png" srcset="" />
        </div>
        <div className=' col-span-1 justify-center flex flex-col'>
            <h1 className='text-[#00df9a] px-3 md:px-0 font-bold my-2'>Learn From Experts</h1>
            <p className='my-2 px-3 md:px-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestias, optio modi ab ratione voluptatum quaerat repellat a tempora esse commodi totam velit dolorum dolore rem et iste laboriosam facere?</p>
            <button className='md:w-[30%] w-[50%] mx-auto md:mx-0  inline  bg-black text-white p-3 rounded'>Get started</button>
        </div>
    </div>
  )
}

export default Experts