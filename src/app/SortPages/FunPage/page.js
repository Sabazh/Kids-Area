'use client'

import { useEffect, useState } from 'react'
import Footer from '@/layout/Footer/Footer'
import Sort from '@/components/Accordions/Sort/Sort'
import HeartIcon from '@/components/HeartIcon/HeartIcon'
import ImgSlider from '@/components/ImgSlider/ImgSlider'
import Pagination from '@/components/Pagination/Pagination'
import Card from '@/components/Card/Card'
import funData from '@/dummyData/fun'
import saveFavouritesToLocal from '@/utils/saveFavouritesToLocal'
import { red } from '@/themes/colors'

const PER_PAGE = 12
const type = 'fun'

const funPage = () => {
  const repeatedData = Array.from({ length: 144 }, (_, index) => ({
    ...funData[index % funData.length],
    id: index + 1,
  }))
  const [local, setLocal] = useState([])
  const [data, setData] = useState(repeatedData.slice(0, PER_PAGE))

  const handlePageChange = (pageIndex) => {
    setData(
      repeatedData.slice(pageIndex * PER_PAGE, pageIndex * PER_PAGE + PER_PAGE)
    )
  }
  const handleHeart = (id) => {
    saveFavouritesToLocal(id, type, setLocal)
  }
  const isFilled = (id) => local.includes(id)

  useEffect(() => {
    const locale = JSON.parse(localStorage.getItem(type))
    if (locale) setLocal(locale)
  }, [])

  return (
    <div>
      <ImgSlider />
      <div className="cont">
        <div className="mt-5-0 h-8-0 rounded-1-0 cursor-pointe bg-red">
          <h2 className="text-center sm:flex font-fR text-white text-1-8 sm:text-2-5 sm:ml-9-4 py-2-0 uppercase">
            ძალიან ბევრ გასართობ ადგილს ნახავ აქ
          </h2>
        </div>
        <div className="flex justify-end items-center mt-2-0">
          <Sort />
        </div>
        <div className="grid sm:grid-cols-4 gap-2-0 sm:gap-8-0 mt-3-0 sm:mt-10-0">
          {data.map((item) => (
            <div key={item.id} className="relative">
              <div className="absolute top-1-0 right-1-0">
                <HeartIcon
                  filled={isFilled(item.id)}
                  toggleHeart={() => handleHeart(item.id)}
                />
              </div>
              <Card {...item} />
            </div>
          ))}
        </div>
        <div className="my-5-0 sm:my-10-0">
          <Pagination
            itemsPerPage={PER_PAGE}
            listLength={repeatedData.length}
            handlePageChange={handlePageChange}
            background="bg-red px-1-8 py-0-8 rounded-1-0"
          />
        </div>
      </div>
      <Footer backgroundColor={red} />
    </div>
  )
}

export default funPage
