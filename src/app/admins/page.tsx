import Navbar from '@/components/Navbar/Navbar'
import ProtectedLayout from '@/utils/Protected'
import React from 'react'

const page = () => {
  return (
    <>
        <ProtectedLayout>
            <Navbar/>
<div className="">
    
</div>

        </ProtectedLayout>
    </>
  )
}

export default page