// import HomeBannerContent from '@/components/Home/HomeBannerContent/HomeBannerContent'
import HomeCTABanner from '@/components/Home/HomeCTABanner/HomeCTABanner'
import OurDoctors from '@/components/Home/OurDoctors/OurDoctors'
import Testimonials from '@/components/Home/Testimonials/Testimonials'
import Navbar from '@/components/Navbar/Navbar'
import ProtectedLayout from '@/utils/Protected'
import React from 'react'

const page = () => {
  return (
    <>
    

    <ProtectedLayout>
    <Navbar/>


<div className='p-6'>

{/* <HomeBannerContent/> */}
<OurDoctors/>
<HomeCTABanner/>

<Testimonials/>

  </div>
    </ProtectedLayout>
  
    </>
 
  )
}

export default page