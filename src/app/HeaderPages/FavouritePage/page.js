'use client'

import { useEffect, useState } from 'react'
import Footer from '@/layout/Footer/Footer'
import ImgSlider from '@/components/ImgSlider/ImgSlider'
import Card from '@/components/Card/Card'
import HeartIcon from '@/components/HeartIcon/HeartIcon'
import gartenData from '@/dummyData/garten'
import schoolData from '@/dummyData/school'
import spaceData from '@/dummyData/space'
import funData from '@/dummyData/fun'
import sportsData from '@/dummyData/sports'
import { clasicRed } from '@/themes/colors'

const FavouritePage = () => {
  const gartenJson = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('garten')) : null;
  const schoolJson = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('school')) : null;
  const spaceJson = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('space')) : null;
  const funJson = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('fun')) : null;
  const sportsJson = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('sports')) : null;
  const [data, setData] = useState([])

  useEffect(() => {
    let result = []
    if (gartenJson) {
      const resultData = gartenData
        .filter((item) => gartenJson.includes(item.id))
        .map((item) => ({
          ...item,
          type: 'garten',
        }))
      result.push(...resultData)
    }
    if (schoolJson) {
      const resultData = schoolData
        .filter((item) => schoolJson.includes(item.id))
        .map((item) => ({
          ...item,
          type: 'school',
        }))
      result.push(...resultData)
    }
    if (spaceJson) {
      const resultData = spaceData
        .filter((item) => spaceJson.includes(item.id))
        .map((item) => ({
          ...item,
          type: 'space',
        }))
      result.push(...resultData)
    }
    if (funJson) {
      const resultData = funData
        .filter((item) => funJson.includes(item.id))
        .map((item) => ({
          ...item,
          type: 'fun',
        }))
      result.push(...resultData)
    }
    if (sportsJson) {
      const resultData = sportsData
        .filter((item) => sportsJson.includes(item.id))
        .map((item) => ({
          ...item,
          type: 'sports',
        }))
      result.push(...resultData)
    }
    setData(result)
  }, [])

  const handleHeart = (id, type) => {
    const updatedData = data.filter((item) => item.id !== id)
    setData(updatedData)
    localStorage.setItem(
      type,
      JSON.stringify(updatedData.map((item) => item.id))
    )
  }

  return (
    <div>
      <ImgSlider />
      <div className="cont">
        <div className="mt-5-0 h-8-0 rounded-1-0 cursor-pointer bg-rose-600">
          <h2 className="text-center sm:flex font-fR text-white text-1-8 sm:text-2-5 sm:ml-9-4 py-2-0 uppercase">
            ფავორიტი
          </h2>
        </div>
        <div className="grid sm:grid-cols-4 gap-2-0 sm:gap-8-0 my-3-0 sm:my-10-0 min-h-[600px]">
          {data.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute top-1-0 right-1-0">
                <HeartIcon
                  filled
                  toggleHeart={() => handleHeart(item.id, item.type)}
                />
              </div>
              <Card {...item} />
            </div>
          ))}
        </div>
      </div>
      <Footer backgroundColor={clasicRed} />
    </div>
  )
}

export default FavouritePage
