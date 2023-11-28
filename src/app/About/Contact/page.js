import Footer from '@/layout/Footer/Footer'
import { orange } from '@/themes/colors'
import { ImFacebook } from 'react-icons/im'

const Contact = () => {
  return (
    <div>
      <div className='px-1-0 sm:px-16-0 py-5-0 sm:py-8-0 grid sm:flex'>
        <img src='/images/Work in progress-rafiki 1.png' className='hidden sm:block'/>
        <div className='flex flex-col mt-3-0 sm:mt-12-4 font-fR text-1-4 sm:text-1-8 text-center gap-2-8'>
          <div className='grid gap-0-5 sm:w-40-0'>
            <label>სახელი, გვარი</label>
            <input className='px-1-0 w-full h-4-0 border-solid border-0-1 border-black/20 outline-none'/>
          </div>
          <div className='grid gap-0-5'>
            <label>თქვენი ელ.ფოსტა</label>
            <input className='px-1-0 w-full h-4-0 border-solid border-0-1 border-black/20 outline-none'/>
          </div>
          <div className='grid gap-0-5'>
            <label>თემა</label>
            <input className='px-1-0 w-full h-4-0 border-solid border-0-1 border-black/20 outline-none'/>
          </div>
          <div className='grid gap-0-5'>
            <label>წერილი</label>
            <textarea className='border-solid border-0-1 border-black/20 h-14-4 outline-none px-1-0 pt-0-5'/>
          </div>
          <button className='bg-orange text-white py-1-0 rounded-1-0'>გაგზავნა</button>
        </div>
        <div className='flex flex-col font-fR text-1-8'>
          <h3 className='mt-6-0 sm:mt-12-4 ml-15-0 sm:ml-16-5'>კონტაქტი</h3>
          <div className='grid gap-1-8 mt-2-4 ml-7-4 sm:ml-9-8'>
            <div className='flex gap-1-7'>
              <img src='/svg/location-pin.svg'/>
              <p>საბურთალოს ქუჩა</p>
            </div>
            <div className='flex gap-1-7'>
              <img src='/svg/phone.svg'/>
              <p>+995 32 2 96 85 74</p>
            </div>
            <div className='flex gap-1-7'>
              <img src='/svg/envelope.svg'/>
              <p>Kids.area@gmail.com</p>
            </div>
            <div className='flex items-center gap-1-7'>
              <ImFacebook  className='w-3-0 text-blue-02'/>
              <p>Facebook Link</p>
            </div>
          </div>
        </div>
      </div>
      <Footer backgroundColor={orange}/>
    </div>
  )
}

export default Contact;