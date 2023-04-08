import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function Header()
{
    const [toggle, setToggle] = useState(false);

    return (
        <div className='bg-[#2d46ec] p-4'>
            <div className="max-w-[1240px] py-[10px] items-center flex justify-between mx-auto">
                <div className='text-3xl font-bold'>
                    DiGi Tech
                </div>
                {
                    toggle ?
                        <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-2xl text-white md:hidden block' />
                        :
                        <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-2xl text-white md:hidden block' />
                }

                <ul className='md:flex hidden text-white'>
                    <li className='cursor-pointer hover:bg-violet-700 hover:border hover:rounded-lg active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-[100px] h-[30px] text-center items-center hover:font-bold'>Home</li>
                    <li className='cursor-pointer hover:bg-violet-700 hover:border hover:rounded-lg active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-[100px] h-[30px] text-center items-center hover:font-bold'>Company</li>
                    <li className='cursor-pointer hover:bg-violet-700 hover:border hover:rounded-lg active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-[100px] h-[30px] text-center items-center hover:font-bold'>Resource</li>
                    <li className='cursor-pointer hover:bg-violet-700 hover:border hover:rounded-lg active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-[100px] h-[30px] text-center items-center hover:font-bold'>About</li>
                    <li className='cursor-pointer hover:bg-violet-700 hover:border hover:rounded-lg active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-[100px] h-[30px] text-center items-center hover:font-bold'>Contact</li>
                </ul>
                {/* Responsive menu */}
                <ul className={`duration-300 md:hidden text-white fixed w-full h-screen
         bg-black left-[-100%] top-[87px] ${toggle ? 'left-[0]':'left-[-100%]'}`}>
                    <li className='p-5'>Home</li>
                    <li className='p-5'>Company</li>
                    <li className='p-5'>Resource</li>
                    <li className='p-5'>About</li>
                    <li className='p-5'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header