"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Sidebar from "./sidebar"


export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
        <>
        <header className="relative z-[100] mx-[1em] mb-[2em] mt-[1em] rounded-lg bg-[#2D2D2D] text-white md:mx-[2.2em]">
          <div className="z-[100] flex px-[1em] py-[1.2em] md:px-[25]">
            <Image
              src={"/images/logo-dark.svg"}
              height={100}
              width={100}
              alt="logo"
            />
            <button 
            onClick={() => {
							setSidebarOpen(!sidebarOpen)}}
            className="block ml-auto mr-0 sm:hidden"
            >
              <Image
                className=" min-w-[25px]"
                src={"/images/hamburger.svg"}
                height={1}
                width={1}
                alt="ham"
              />
            </button>
            <ul className="hidden sm:flex gap-[3em] ml-auto mr-0 pr-[1em]">
              <li>
                <Link href="" className="hover:text-[#FFB539] transition">How it works</Link>
              </li>
              <li>
                <Link href="" className="hover:text-[#FFB539] transition">Learn More</Link>
              </li>
              <li>
                <Link href="" className="hover:text-[#FFB539] transition">DAO Info</Link>
              </li>
            </ul>
          </div>
        </header>
        {sidebarOpen && <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}
      
        </>
    )
}