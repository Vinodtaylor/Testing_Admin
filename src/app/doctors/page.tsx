"use client"


import Doctors from '@/components/Doctor/Doctors/Doctors'
import Navbar from '@/components/Navbar/Navbar'
import ProtectedLayout from '@/utils/Protected'
import React from 'react'
const page = () => {
  return (
    <>
    <ProtectedLayout>
    <Navbar/>
       <div>
      <Doctors/>
    </div>
    </ProtectedLayout>

    </>
 
  )
}

export default page