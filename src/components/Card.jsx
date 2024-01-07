import React from 'react'
import { FaRegFileCode } from "react-icons/fa";
import { MdOutlineDownload } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";

function Card({data}) {
  return (
    <div className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>

      <FaRegFileCode></FaRegFileCode>

      <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>

      <div className='footer absolute bottom-0  w-full   left-0'>
       
       <div className='flex items-center justify-between px-8 py-3 mb-3'>

         <h5>{data.filesize}</h5> 

<span className='w-5 h-5 bg-zinc-600 rounded-full flex items-center justify-center'>
{data.close ? <IoMdCloseCircleOutline/> : <MdOutlineDownload size="1.2em" color='#fff'/> }

</span>


       </div>
         {
           data.tag.isOpen && (
            <div className='tag w-full py-4 bg-green-600 flex items-center justify-center'>

            <h3 className='text-sm font-semibold'>Download Now</h3>
    
             </div>
           ) }
        


      </div>
    </div>
  )
}

export default Card