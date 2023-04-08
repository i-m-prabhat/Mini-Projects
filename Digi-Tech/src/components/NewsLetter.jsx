import React from 'react'

const NewsLetter = () => {
  return (
    <div className='bg-[#4a62ff] p-4'>
        <div className="max-w-[1240px] mx-auto md:flex justify-between py-[50px]">
            <div className='m-1'>
                <h1 className='text-[20px] md:text-[40px] font-bold text-white'>Want to learn latest I.T skills?</h1>
                <span className='text-white'>Sign up to our NewsLetter and stay up to date.</span>
            </div>
            <div className='m-1'>
                <input type="text" className='p-3 mt-2 mb-2 mr-2 md:w-[300px] text-slate-600' placeholder='Email....' />
                <button className='bg-black text-white p-3 rounded'>Subscribe</button>
                <br />
                <p className='text-white'>We care about the protection of your data. Read our <br /> <a className='text-black' href="/"> Privacy Policy.</a></p>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter