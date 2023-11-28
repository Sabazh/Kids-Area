'use client'

import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import Login from "@/components/Popup/Login/Login"; 
import Link from "next/link";

const Header = () => {
  const { loginVisible, loginHandler, isLoggedIn, isLoggedInHandler } = useContext(AppContext);

  return (
    <div>
        {loginVisible && <Login />}
        <div>
            <header className="sm:flex sm:items-center sm:justify-between py-1-0 px-0-5 sm:px-14-0"> 
                <div className="hidden sm:block">
                    <Link href="/">
                        <img src="/images/KidsArea.png" className="ml-0-1 sm:ml-7-6"/>
                    </Link>
                </div>
                <div className="flex gap-2-8 sm:gap-14-0">
                    <div className="sm:hidden">
                        <Link href="/">
                            <img src="/images/KidsArea-Small.png"/>
                        </Link>
                    </div>
                    <div className="hidden sm:grid gap-1-0 ml-30-0 w-20-0 h-3-0">
                        <div className="flex gap-1-5 font-fR text-1-8">
                            <Link href='/HeaderPages/SearchPage'>
                                <img src="/svg/search.svg" className="mt-0-3 cursor-pointer hover:w-3-0"/>
                            </Link>
                            <input placeholder="ძიება" className="w-15-0 outline-none"/>
                        </div>
                        <div className="h-0-2 bg-gray-400 w-18-2" />
                    </div>
                    <div className="mt-0-5 ">
                        {isLoggedIn ? (
                            <div className="flex gap-1-5 px-1-2 py-0-5 bg-grey rounded-2-4 text-1-6 font-fB uppercase">
                                <img src="/svg/user.svg"/>
                                <button onClick={() => isLoggedInHandler(false)}>გასვლა</button>
                            </div>
                        ) : (
                            <div className="flex gap-1-5 px-1-2 py-0-5 bg-grey rounded-2-4 text-1-6 font-fB uppercase">
                                <img src="/svg/user.svg"/>
                                <button onClick={() => loginHandler(true)}>შესვლა</button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex mt-2-0 sm:hidden">
                    <div className="flex gap-1-5 font-fR text-1-8 border-0-1 border-solid border-black/30 rounded-1-0 w-24-2 p-0-5">
                        <Link href='/HeaderPages/SearchPage'>
                            <img src="/svg/search.svg" className="cursor-pointer hover:w-3-0"/>
                        </Link>
                        <input placeholder="ძიება" className="w-15-0 outline-none"/>
                    </div>
                    <div className="flex gap-2-6 ml-4-0">
                        <Link href='/HeaderPages/FavouritePage'>                    
                            <img src="/svg/Heart-red.svg"/>
                        </Link>
                        <Link href='/HeaderPages/ComparePage'>
                            <img src="/svg/compare.svg"/>
                        </Link>
                    </div>
                </div>
                <div className="hidden sm:flex gap-3-3">
                    <Link href='/HeaderPages/FavouritePage'>                    
                        <img src="/svg/Heart-red.svg"/>
                    </Link>
                    <Link href='/HeaderPages/ComparePage'>
                        <img src="/svg/compare.svg"/>
                    </Link>
                    <img src="/svg/gflag.svg" />
                </div>
            </header>
        </div>
    </div>
  )
}

export default Header