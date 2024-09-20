"use client"
//()
import { useState } from 'react'
//import { Image } from "next/dist/client/image-component";
import Image from 'next/image';
import Link from "next/link"
import Sidebar from './components/sidebar';

let comparisonData = [
  {
    name: "community fundraising",
    fields: [true, false, false, false],
  },
  {
    name: "Onboarding users to web3",
    fields: [true, false, false, false],
  },
  {
    name: "Non-custodial options",
    fields: [true, false, false, false],
  },
];

export default function LandingPage() {

  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <>
    {sidebarOpen && <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}
      <div className="">
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
            className="block ml-auto mr-0 md:hidden"
            >
              <Image
                className=" min-w-[25px]"
                src={"/images/hamburger.svg"}
                height={1}
                width={1}
                alt="ham"
              />
            </button>
            <ul className="hidden md:flex gap-[3em] ml-auto mr-0 pr-[1em]">
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

        <section className="mt-[4em] grid h-[fit-content] place-items-center">
          <div className="relative grid h-[100%] w-[100%]">
            <Image
              src={"/curves/hero curve 1.svg"}
              className="cover z-20 absolute md:mt-[-9em] mt-[-4.4em] w-[103vw] lg:mt-[-13.5em] right-0 left-0"
              height={200}
              width={1250}
              alt=""
            />

            <Image
              src={"/curves/hero curve 2.svg"}
              className="cover absolute z-10 w-[103vw] mt-[15em] md:mt-[-7.5em] lg:mt-[-13em] right-0 left-0"
              height={500}
              width={1200}
              alt=""
            />

            <div className="z-50 lg:mt-[2em]">
              <div className=" flex flex-col-reverse px-[2em] text-center md:grid md:grid-cols-[1fr,1fr] md:px-[3.5em] md:text-left ">
                <button className="mx-auto mt-6 block rounded-md bg-[#FF005C] px-[2.4em] py-[0.7em] md:hidden">
                  {" "}
                  Sign up Now
                </button>
                <Image
                  src={"/images/debit-card-web.svg"}
                  className="hidden w-[87%] md:block"
                  height={1}
                  width={1}
                  alt="nlnjlnl"
                />
                <Image
                  src={"/images/bcard-home-hero.png"}
                  className="block w-[86%] md:hidden "
                  height={1}
                  width={1}
                  alt="nlnjlnl"
                />

                <div className="flex flex-col py-[2.5em]">
                  <h2 className="poppins  text-[2.2em] md:text-[1.85em] font-semibold md:leading-10 lg:text-[2.4em] lg:leading-[1.3em] ">
                    The Card to support your community{" "}
                    <span className="text-[#FFB539]">with every swipe!</span>
                  </h2>
                  <p className="mt-[1em] max-w-[85%]  max-sm:mx-auto">
                    Your BCard redirects payment card fees to your favorite
                    community, and rewards you with tokens.
                  </p>
                  <button className="mx-auto mt-5 hidden rounded-md bg-[#FF005C] px-[2.4em] py-[0.7em] md:block">
                    {" "}
                    Sign up Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-2 mt-[5em] grid place-items-center md:mt-[20em]">
          <div className="flex h-[max-content] flex-col gap-[3em] p-5 md:grid md:w-[78%] md:grid-cols-[1fr,1fr,1fr]  md:gap-6">
            <div className="gradient-bg-1 center-align flex h-[100%] w-[100%] flex-col justify-center rounded-[1.4em] p-4 shadow-lg">
              <Image
                src={"/images/card 1.png"}
                className="cover mx-auto w-[100%] mt-[-2em]"
                height={1}
                width={1}
                alt="image"
              />

              <h3 className="mt-[-2em] text-center text-[1.6em] font-semibold leading-8 ">
                The <span className="text-[#FF5810]">community</span> owned
                card!
              </h3>
              <p className="mb-2 mt-[1em] text-center text-[0.95em] leading-5">
                Your Defy Card is by DAOs, for DAOs. Unlike centralized crypto
                cards, you have a say in how we build the future.
              </p>
            </div>

            <div className="gradient-bg-2 center-align flex h-[100%] w-[100%] flex-col justify-center rounded-[1.4em] p-4 shadow-lg">
              {" "}
              <Image
                src={"/images/card 2.png"}
                className="cover mx-auto w-[85%]"
                height={1}
                width={1}
                alt="image"
              />
              <h3 className="mt-2 text-center text-[1.6em] font-semibold leading-8 ">
                Support your <span className="text-[#13B5EC]">favorite</span>{" "}
                communities
              </h3>
              <p className="mb-2 mt-[1em] text-center text-[0.95em] leading-5">
                Every time you use a card, 1-2% of the purchase price goes to a
                bank. Bankless Card redirects some of that fee to your favorite
                community.
              </p>
            </div>

            <div className="gradient-bg-3 center-align flex h-[100%] w-[100%] flex-col justify-center rounded-[1.4em] p-4 shadow-lg">
              {" "}
              <Image
                src={"/images/card 3.png"}
                className="cover mx-auto w-[78%]"
                height={1}
                width={1}
                alt="image"
              />
              <h3 className="mt-2 text-center text-[1.6em] font-semibold leading-8 ">
                Easily
                <span className="text-[#27FFA4]"> onboard</span> new members
              </h3>
              <p className="mb-2 mt-[1em] text-center text-[0.95em] leading-5">
                With our easy-to-use mobile app, you can onboard new friends
                into your community with a simple download.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-[6em] mt-[2em] grid place-items-center md:mt-[5em]">
          <div className="flex h-[max-content] flex-col gap-[2em] p-5 md:grid md:w-[78%] md:grid-cols-[1fr,1fr,1fr]  md:gap-6">
            <div className=" center-align grid grid-rows-[9.7em,auto] h-[100%] w-[100%] justify-center rounded-[1.4em] p-4 shadow-lg">
              <Image
                src={"/svg/arrow-down-tray.svg"}
                className=" mx-auto max-w-[8.2em] max-h-[8.2em]"
                height={150}
                width={150}
                alt="image"
              />

              <h3 className="mt-2 text-center text-[1.65em] font-semibold leading-9 ">
                Download the App
              </h3>
              <p className="mb-2 mt-[1em] text-center text-[1em] text-[#9AA0A6] leading-6">
              Get a physical/virtual card, choose a community
              </p>
            </div>

            <div className=" center-align grid grid-rows-[9.7em,auto] h-[100%] w-[100%] justify-center rounded-[1.4em] p-4 shadow-lg">
              {" "}
              <Image
                src={"/svg/currency-dollar.svg"}
                className=" mx-auto max-w-[8.2em] max-h-[8.2em]"
                height={150}
                width={150}
                alt="image"
              />
              <h3 className="mt-2 text-center text-[1.65em]  font-semibold leading-9 ">
              Make purchases, get token rewards

              </h3>
              <p className="mb-2 mt-[1em] text-center text-[1em] text-[#9AA0A6] leading-6">
              50% of net interchange goes to chosen community
              </p>
            </div>

            <div className=" center-align grid grid-rows-[9.7em,auto] h-[100%] w-[100%] justify-center rounded-[1.4em] p-4 shadow-lg">
              {" "}
              <Image
                src={"/svg/user-group.svg"}
                className="mt-0 mx-auto max-w-[8.2em] max-h-[8.2em]"
                height={150}
                width={150}
                alt="image"
              />
              <h3 className="mt-2 text-center text-[1.65em] font-semibold leading-9 ">
              Support your community
              </h3>
              <p className="mb-2 mt-[1em] text-center text-[1em] text-[#9AA0A6] leading-6">
              {`User’s community enjoys increased economic stability and health`}
              </p>
            </div>
          </div>
        </section>

        <section className="hidden mb-4 md:grid place-items-center md:mt-[-50em] lg:mt-[-58em]">
          <div className="grid relative w-[110%]">
          <div className="">
            <Image
                src={"/curves/curve 7.svg"}
                className="w-[100%]"
                height={1}
                width={1}
                alt=""
              />
            </div>
          </div>
        </section>


        <section className="md:hidden mt-5 flex w-screen mb-[5em] max-sm:mt-[10em]">
          <div className="grid relative w-[100%]">
            <div className="absolute">
            <Image
                src={"/images/curve 4.png"}
                className="w-[100%]"
                height={1}
                width={1}
                alt=""
              />
            </div>
            

              <div className="flex flex-col md:grid md:grid-cols-[1fr,1fr,1fr] gap-[7em] md:gap-5 mx-auto z-40 w-[90%]">
                <div className=" flex flex-col center-align justify-center md:mt-[5em] text-center">
                  <Image
                    src={"/images/android-phone.svg"}
                    className="w-[34%] mx-auto"
                    height={1}
                    width={1}
                    alt=""
                  />
                  <h3 className="text-[1.4em] mt-4 font-semibold leading-8">Download the App</h3>
                  <p className="text-[0.95em] mt-2 max-w-[80%] mx-auto">Get a physical/virtual card, choose a community</p>
                </div>

                <div className=" flex flex-col center-align justify-center md:mt-[-5em] text-center">
                  <Image
                    src={"/images/credit-card-bubbles.svg"}
                    className="w-[66%] mx-auto"
                    height={1}
                    width={1}
                    alt=""
                  />
                  <h3 className="text-[1.4em]  font-semibold leading-8 max-w-[85%] mx-auto">Make purchases, get token rewards
                  </h3>
                  <p className="text-[0.95em] mt-2 max-w-[80%] mx-auto">50% of net interchange goes to chosen community</p>
                </div>

                <div className=" flex flex-col center-align justify-center text-center md:mt-[4em]">
                  <Image
                    src={"/images/Union.svg"}
                    className="w-[50%] mx-auto"
                    height={1}
                    width={1}
                    alt=""
                  />
                  <h3 className="text-[1.4em] mt-4 font-semibold leading-8">Support your community</h3>
                  <p className="text-[0.95em] mt-2 max-w-[80%] mx-auto">{`User’s community enjoys increased economic stability and health`}</p>
                </div>
              </div>
          </div>
          
        </section>
        <section className="hidden md:grid place-items-center md:mt-[-18em] lg:mt-[-22em]">
          <div className="grid w-[110%]">
          
            <div className="grid place-items-center text-center w-[90%] mx-auto pt-[8em] z-40">
              <h2 className="text-[3em] mb-3 max-w-[62%] font-semibold leading-[1.3em]">Give your community a way to support your cause  </h2>
              <p className="md:max-w-[35%] mt-[2em] mb-[3.4em] text-[#9AA0A6] text-[1em]">BCard works for every community, no matter how big or small, whether or not you have a token. </p>
            </div>
          </div>
        </section>


        <section className="relative mb-[12em] md:mb-[15em] z-50">
          <div className="flex flex-col-reverse max-sm:w-[92%] w-[90%] md:grid md:place-items-center md:grid-cols-[1fr,1fr] h-[fit-content] mx-auto md:h-[5em] mt-[2em] md:mx-auto w-[70%] gap-[5em] md:gap-[6em]">
            <div className="p-5 shadow-md gradient-bg-blue-purple rounded-xl h-[100%] w-[100%]">
              <div className="flex flex-col-reverse md:grid md:grid-cols-[70%,30%] pt-4 gap-2">
                <h2 className="text-[1.6em] md:text-[1.4em] max-sm:mt-[-1.8em] md:px-4 font-semibold leading-8">{`Bcard powers your community’s `}{<span className="text-[#08BFFF]">economic</span>} engine</h2>
                <div>
                  <Image
                src={"/images/image 22.svg"}
                className="w-[50%] max-sm:h-[10%] max-sm:mt-[-3.6em] md:w-[90%] max-sm:mx-auto max-sm:rotate-90 mix-blend-screen"
                height={1}
                width={1}
                alt=""
              /></div>
              </div>
              <p className="hidden md:block text-center mt-4 leading-6">Using BCard, each member of your community creates recurring revenue with their existing everyday spending</p>
            </div>


            <div className="p-5 shadow-md gradient-bg-green-purple rounded-xl h-[100%] w-[100%]">
              <div className="flex flex-col-reverse md:grid md:grid-cols-[70%,30%] pt-4 gap-2">
                <h2 className="text-[1.6em] max-sm:mt-5 md:text-[1.4em] md:px-4 font-semibold leading-8"><span className="text-[#14FF00]">Fuelling</span> projects and aspirations with every swipe</h2>
                <div className="max-sm:flex max-sm:gap-[1.5em] max-sm:justify-center">
                  <Image
                    src={"/images/arrow.svg"}
                    className="max-sm:w-[20%] md:w-[80%] mix-blend-screen"
                    height={1}
                    width={1}
                    alt=""
                  />
                   <Image
                    src={"/images/arrow.svg"}
                    className="block md:hidden w-[20%] mix-blend-screen"
                    height={1}
                    width={1}
                    alt=""
                  />
              </div>
              </div>
              <p className="hidden md:block text-center mt-4 leading-6">{`BCard uses payment card fees to buy your community’s tokens from a DEX, creating organic token demand.`}</p>
            </div>
           
          </div>
        </section>


        <section className="md:hidden grid place-items-center md:mt-[25em]">
          
          <button className=" z-50 mx-auto mt-5 bg-[black] rounded-md border border-white px-[2.6em] py-[0.7em]">Meet all of us</button>
        </section>


        <section className="grid place-items-center mt-[5em] md:mt-[25em] mb-[5em]">
          <h3 className="tracking-[0.7em]">OUR PARTNERS</h3>
          <div className="mt-[4em] flex max-sm:flex-col gap-[4em] max-sm:justify-center justify-between center-align w-[50%]">
          <Image
                src={"/images/image 15.svg"}
                className="w-[6em] mx-auto"
                height={1}
                width={1}
                alt=""
              />
            <Image
                src={"/images/DAO Logo.svg"}
                className="w-[6em] mx-auto"
                height={1}
                width={1}
                alt=""
              />
              
              <Image
                src={"/images/image 16.svg"}
                className="w-[6em] mx-auto"
                height={1}
                width={1}
                alt=""
              />
          </div>
        </section>


        <section className="grid place-items-center  mt-[10em] mb-[5em]">
        <h3 className="mb-[1.5em] text-[1.8em] font-semibold text-center leading-[2em]">Contact us</h3>
          <div className="flex flex-col gap-4 w-[90%] md:w-[65%] justify-center center-align">
            <div className="flex max-sm:flex-col max-sm:w-[200%] gap-4 w-[100%]">
            <input 
            type="text"  
            placeholder="Name" 
            className="bg-[#1C1C1C] text-white placeholder-gray-400 rounded-lg border border-gray-600 p-2 pl-4 w-[50%]"
        />
        <input 
            type="text" 
            placeholder="TheDaoist@protonmail.com" 
            className="bg-[#1C1C1C] text-white placeholder-gray-400 rounded-lg border border-gray-600 p-2 pl-4 w-[50%]"
        />
            </div>
            <div className="flex max-sm:flex-col max-sm:w-[200%] gap-4 w-[100%]">
            <input 
            type="text" 
            placeholder="Discord Handle" 
            className="bg-[#1C1C1C] text-white placeholder-gray-400 rounded-lg border border-gray-600 p-2 pl-4 w-[50%]"
        />
        <input 
            type="text" 
            placeholder="Organization" 
            className="bg-[#1C1C1C] text-white placeholder-gray-400 rounded-lg border border-gray-600 p-2 pl-4 w-[50%]"
        />
            </div>
            <div>
            <textarea 
            placeholder="Write a message for us!" 
            className="bg-[#1C1C1C] text-white placeholder-gray-400 rounded-lg border border-gray-600 p-2 pl-4 w-[100%] h-60"
        ></textarea>
            </div>
          </div>
          <button className="mx-auto mt-[2em] rounded-md bg-[#FF005C] px-[2.6em] py-[0.7em]">
                    {" "}
                    Contact us
                  </button>
        </section>

        

        <hr className="mb-[1em] mt-[8em] bg-grey border-[grey] border"></hr>

    <section className="grid place-items-center  mb-[4em]">
    <Image
              src={"/images/logo-dark.svg"}
              height={1}
              width={1}
              className="w-[35%] md:w-[15%] ml-5 mt-[1em] mb-[2em]"
              alt="logo"
            />

<div className="text-center mt-[1.8em] flex max-sm:flex-col gap-[4em] max-sm:justify-center justify-between center-align w-[50%]">
  <Link className="mx-auto w-[fit-content]" href="">Link 1</Link>
  <Link className="mx-auto w-[fit-content]" href="">Link 2</Link>
  <Link className="mx-auto w-[fit-content]" href="">Link 3</Link>
  <Link className="mx-auto w-[fit-content]" href="">Link 4</Link>
</div>

  
        
    </section>

    <section className="flex max-sm:gap-[4em] max-sm:mt-[-1em] max-sm:flex-col max-sm:justify-center max-sm:center-align">
      <div className="flex gap-2 px-3 py-4 max-sm:mx-auto w-[fit-content]">
        <Link href=""><Image src="/icons/discord-alt-logo.svg" height={20} width={20} alt="" /></Link>
        <Link href=""><Image src="/icons/twitter-x-logo.svg" height={20} width={20} alt="" /></Link>
        <Link href=""><Image src="/icons/youtube-logo.svg" height={20} width={20} alt="" /></Link>
      </div>
      <p className="md:mr-0 md:ml-auto max-sm:mx-auto text-center px-3 py-4 text-[#9AA0A6] max-sm:text-[0.95em]">All rights reserved 2024 BCard</p>
    </section>
 
          
   
      </div>
    </>
  );
}
