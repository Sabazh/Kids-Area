'use client'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Link from 'next/link'
import Card from '../Card/Card'

const CardsSlider = (props) => {
  const { backgroundColor, title, list, link = '' } = props
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  return (
    <div className="cont">
      <div className="grid mb-1-0 sm:mb-0-5">
        <Link href={link}>
          <div
            className="h-8-0 rounded-1-0 cursor-pointer"
            style={{ backgroundColor }}
          >
            <h2 className="text-center sm:flex font-fR text-white text-2-0 sm:text-2-5 sm:ml-9-4 py-2-0 uppercase">
              {title}
            </h2>
          </div>
        </Link>
        <div className="hidden sm:flex items-center gap-1-4 justify-end">
          <div
            ref={navigationPrevRef}
            className="flex bg-gray-50 w-5-0 h-5-0 rounded-full items-center justify-center cursor-pointer"
          >
            <img src="/svg/angle-left-small.svg" alt="" />
          </div>
          <div
            ref={navigationNextRef}
            className="flex bg-gray-50 w-5-0 h-5-0 rounded-full items-center justify-center cursor-pointer"
          >
            <img src="/svg/angle-right-small.svg" alt="" />
          </div>
        </div>
      </div>
      <div className='sm:block hidden'>
        <Swiper
          breakpoints={{
            280: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 80,
              slidesPerView: 4,
            },
          }}
          modules={[Navigation]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current
            swiper.params.navigation.nextEl = navigationNextRef.current
          }}
        >
          {list.map((item, index) => (
            <SwiperSlide key={item.id}>
              {index === 0 ? (
                <span
                    className="absolute px-2-0 ml-1-2 mt-1-2 rounded-1-0 text-2-0 font-fB text-white"
                    style={{ backgroundColor }}
                >
                VIP
                </span>
              ) : null}
              <Card {...item} backgroundColor={backgroundColor}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='sm:hidden'>
          {list.slice(0, 2).map((item) => (
            <div key={item.id}>
              <Card {...item} backgroundColor={backgroundColor}/>
            </div>
          ))}
      </div>
    </div>
  )
}

export default CardsSlider
