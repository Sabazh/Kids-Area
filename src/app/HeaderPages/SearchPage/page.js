'use client'

import Location from '@/components/Accordions/Location/Location'
import SearchMap from '@/components/Accordions/SearchMap/SearchMap'
import Type from '@/components/Accordions/Type/Type'
import ImgSlider from '@/components/ImgSlider/ImgSlider'
import Footer from '@/layout/Footer/Footer'
import { blue } from '@/themes/colors'

const searchPage = () => {
  return (
    <div>
      <ImgSlider />
      <div className="cont">
        <div className="mt-5-0 h-8-0 rounded-1-0 cursor-pointer bg-blue">
          <h2 className="text-center sm:flex font-fR text-white text-1-8 sm:text-2-5 sm:ml-9-4 py-2-0 uppercase">
            ვიწყებთ ჯადოსნობას
          </h2>
        </div>
        <div className="grid sm:flex min-h-[800px] gap-2-0 sm:gap-14-0 my-4-0 sm:mt-15-0 px-1-2 sm:px-15-5">
          <Type />
          <Location />
          <SearchMap />
        </div>
      </div>
      <Footer backgroundColor={blue} />
    </div>
  )
}

export default searchPage
