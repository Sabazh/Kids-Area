import Link from "next/link"

const Footer = ({backgroundColor}) => {
  return (
    <div className="w-full py-1-7 font-fR text-1-8 px-2-0 sm:px-14-0 rounded-t-2-0" style={{backgroundColor}}>
        <div className="grid gap-2-0 sm:gap-4-0 sm:ml-9-0 mt-2-0 w-14-0 uppercase">
            <Link href="/About/AboutUs"><h1 className="hover:text-white">ჩვენს შესახებ</h1></Link>
            <Link href="/About/Contact"><h1 className="hover:text-white">კონტაქტი</h1></Link>
            <h1 className="hover:text-white cursor-pointer">cookie policy</h1>
        </div>
        <div className="flex gap-2-0 justify-end items-center mt-5-5">
            <img src="/svg/copyright-square.svg" />
            <p>All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer