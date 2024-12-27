// import HomeBannerContent from '@/components/Home/HomeBannerContent/HomeBannerContent'
import HomeCTABanner from '@/components/Home/HomeCTABanner/HomeCTABanner'
import OurDoctors from '@/components/Home/OurDoctors/OurDoctors'
import Testimonials from '@/components/Home/Testimonials/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div className='p-6'>
    {/* <HomeBannerContent/> */}
    <OurDoctors/>
    <HomeCTABanner/>

      <Testimonials/>
      
          </div>
  )
}

export default page