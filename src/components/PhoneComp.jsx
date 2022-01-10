import React from 'react'
import {BiAdjust} from 'react-icons/bi';
import {FaUserCircle} from 'react-icons/fa';
import Audio from "./Audio"
const PhoneComp = () => {
    return (
        <div className='h-screen'>
          <div className='relative w-1/6 h-4/6  rounded-3xl overflow-hidden top-24 left-32 after:content-[] border-lack border-2
            after:absolute after:bg-red-0 after:w-full after:h-full after:bg-phone-img after:bg-cover after:bg-no-repeat after:bg-center'>
                <div className='absolute w-full h-auto bg-gray-100 pt-4 px-2 pb-1'>
                    <div className='absolute text-xs font-bold flex w-full'>
                        <h1 className='ml-4'>11:33</h1>
                        <div className='w-full text-xs relative left-28'>
                        <i class="fas fa-wifi mr-1"></i>
                        <i class="fas fa-battery-quarter"></i>
                        </div>
                        <div className='absolute flex left-5 top-6'>
                        <i class="fas fa-chevron-left text-sky-600 text-lg"></i>
                        <div className='bg-sky-600 rounded-xl h-5 text-center px-1 py-1 mt-1'>
                        <p className=' text-white'>117</p></div>
                        </div>
                    </div>
                 <FaUserCircle className='mx-auto text-4xl text-gray-400 mt-2'/>
                 <p className='uppercase text-xs pt-0.5 text-center text-gray-700 font-semibold'>CB-xyz 
               <span className='text-xs'> <i class="fas fa-chevron-right text-gray-400"></i> </span> </p>
                </div>
                <div className='absolute top-24 w-full text-center'>
                    <p className='text-xs text-gray-500'>Text Messages <br />
                        <span>Tuesday ,2:14 PM</span>
                    </p>
                </div>
                
                <div className='absolute w-9/12 bg-gray-300 top-36  left-6 p-2 rounded-tl-lg rounded-tr-lg rounded-br-lg overflow-hidden text-gray-800'>
                   <p className='leading-4 text-sm font-serif overflow-hidden'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                   Maiores veritatis quisquam natus reprehenderit dolorum?- 
                   <span className='text-blue-600 font-normal text-base leading-4 cursor-pointer'><a href="#" className='cursor-pointer'>https//google.com</a></span></p>
                 </div>
                 <div className='absolute w-11/12 text-center bottom-24'>
                     <p className='text-xs text-gray-500'>Filtered by SMS Filter</p>
                 </div>
                 <div className='w-11/12 absolute bottom-0 bg-zinc-500 ml-2'>
                     <img src="./media-logo.png" alt="" className='object-contain w-full'/>
                 </div>
            </div>
            
        </div>
        
    )
}

export default PhoneComp
