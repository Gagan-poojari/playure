'use client'

import React, { useState } from 'react'
import CreateGameSession from '@/components/coloboration/CreateGameSession'
import EventHeader from '@/components/coloboration/EventHeader'



const app = () => {
  const [display,setDisplay]=useState(false)
  return (
    <div className='h-screen bg-[#0f172a]'>
       { display ?<CreateGameSession setDisplay={setDisplay}/>:
         <EventHeader setDisplay={setDisplay}/>}
    </div>
  )
}

export default app