import Navbar from '@/components/Navbar/Navbar'
import ServiceCards from '@/components/Services/ServiceCreation/ServiceCreation'
import ProtectedLayout from '@/utils/Protected'
import React from 'react'

const page = () => {
  return (
    <>
    
    <ProtectedLayout>
    <Navbar/>


<div className='p-6'>
    <ServiceCards/>
</div>

    </ProtectedLayout>
  
    </>

  )
}

export default page