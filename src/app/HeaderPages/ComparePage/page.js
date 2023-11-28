'use client'

import ImgSlider from '@/components/ImgSlider/ImgSlider'
import Footer from '@/layout/Footer/Footer'
import { amber } from '@/themes/colors'

const ComparePage = () => {
  return (
    <div>
      <ImgSlider />
      <div className='cont'>
            <div className="mt-5-0 h-8-0 rounded-1-0 cursor-pointe bg-amber">
                <h2 className="text-center sm:flex font-fR text-white text-1-8 sm:text-2-5 sm:ml-9-4 py-2-0 uppercase">
                    მონიშნე და შეადარე
                </h2>
            </div>
        </div>
        <div className='my-10-0 min-h-[600px]'>
            
        </div>
        <Footer backgroundColor={amber}/>
    </div>
  )
}

export default ComparePage