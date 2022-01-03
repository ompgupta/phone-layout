import React from 'react'
import {BiAdjust} from 'react-icons/bi';
import {FaUserCircle} from 'react-icons/fa';
const PhoneComp = () => {
    return (
        <div className='h-screen'>
          <div className='relative w-1/6 h-4/6 rounded-3xl top-24 left-32 after:content-[]
            after:absolute after:bg-red-0 after:w-full after:h-full after:bg-phone-img after:bg-contain after:bg-no-repeat bg-center'>
                <div className='absolute w-11/12 h-28 bg-gray-100 pt-6'>
                    <div className='absolute text-sm font-bold flex'>
                        <h1 className='ml-6'>11:33</h1>
                        <div className='text-sm relative left-36'>
                        <i class="fas fa-wifi mr-1"></i>
                        <i class="fas fa-battery-quarter"></i>
                        </div>
                        <i class="fas fa-chevron-left text-xl absolute top-7 left-6 text-blue-400">
                           <span className='text-xs py-1 px-1 bg-blue-400 rounded-lg text-white'>117</span>
                        </i>
                    </div>
                 <FaUserCircle className='mx-auto text-5xl text-gray-400 mt-3'/>
                 <p className='uppercase font-bold text-sm pt-0.5 text-center text-gray-700'>CB-xyz 
               <span className='text-xs'> <i class="fas fa-chevron-right text-gray-400"></i> </span> </p>
                </div>
                <div className='absolute top-32 w-11/12 text-center'>
                    <p className='text-xs text-gray-500'>Text Messages <br />
                        <span>Tuesday ,2:14 PM</span>
                    </p>
                </div>
                
                <div className='absolute w-9/12 bg-gray-300 top-44 left-6 p-2 rounded-tl-lg rounded-tr-lg rounded-br-lg overflow-hidden text-gray-800'>
                   <p className='leading-4 text-sm font-serif font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                       Maiores veritatis quisquam natus reprehenderit dolorum?- <span className='text-blue-600 font-normal text-base leading-4'><a href="#" className='cursor-pointer'>https//google.com</a></span></p>
                 </div>
                 <div className='absolute w-11/12 text-center bottom-44'>
                     <p className='text-sm text-gray-500'>Filtered by SMS Filter</p>
                 </div>
                 <div className='w-10/12 absolute bottom-0 bg-zinc-500 left-5'>
                     <img src="./media-logo.png" alt="" className='object-contain w-fit'/>
                 </div>
            </div>
        </div>
    )
}

export default PhoneComp
