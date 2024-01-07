import React, { useState } from 'react'
import Card from './Card'

function ForeGround() {

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.", filesize: ".9mb", close: true, tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green" },
   },

   {
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.", filesize: ".9mb", close: true, tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green" },
 },

 {
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing.", filesize: ".9mb", close: true, tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green" },
},



  ];



  return (
    
    <div className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap'>

      {data.map((item, index)=> (
        <Card data={item}/>
      ))}
      
    </div>
  )
}

export default ForeGround