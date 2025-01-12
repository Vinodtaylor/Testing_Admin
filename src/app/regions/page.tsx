"use client"

import Navbar from '@/components/Navbar/Navbar'
import RegionsTable from '@/components/Regions/Regiontable/Regiontable'
import ProtectedLayout from '@/utils/Protected'
import React from 'react'


const page = () => {
  return (
    <>
 <ProtectedLayout>
     
 <Navbar/>

<div>
  <RegionsTable/>
</div>
 </ProtectedLayout>
    </>
  
  )
}

export default page