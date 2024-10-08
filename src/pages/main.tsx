"use client";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";

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

const card_group1 = [
  {
    src: "/images/card 1.png",
    image_classname: "max-sm:mb-[-1.5em] sm:mb-[-2em] md:mb-[-3.4em] cover mx-auto  w-[70%] md:w-[100%] mt-[-2em]",
    title: `The <span class="text-[#FF5810]">community</span> owned
    card!`,
    caption: `Your Defy Card is by DAOs, for DAOs. Unlike centralized crypto
    cards, you have a say in how we build the future.`,
    gradient_classname: "gradient-bg-1"
  },

  {
    src: "/images/card 2.png",
    image_classname: "cover mx-auto w-[68%] md:w-[85%]",
    title: `Support your <span class="text-[#13B5EC]">favorite</span>
    communities`,
    caption: `Every time you use a card, 1-2% of the purchase price goes to a
    bank. Bankless Card redirects some of that fee to your favorite
    community.`,
    gradient_classname: "gradient-bg-2"
  },

  {
    src: "/images/card 3.png",
    image_classname: "cover mx-auto w-[60%] md:w-[78%]",
    title: `Easily
    <span class="text-[#27FFA4]"> onboard</span> new members`,
    caption: `With our easy-to-use mobile app, you can onboard new friends
    into your community with a simple download.`,
    gradient_classname: "gradient-bg-3"
  },
]

const card_group2 = [
  {
    src: "/svg/arrow-down-tray.svg",
    title: `Download the App`,
    caption: `Get a physical/virtual card, choose a community`,
  },
  {
    src: "/svg/currency-dollar.svg",
    title: `Make purchases, get token rewards`,
    caption: `50% of net interchange goes to chosen community`,
  },
  {
    src: "/svg/user-group.svg",
    title: `Support your community`,
    caption: `User’s community enjoys increased economic stability and health`,
  }

  
];

export default function LandingPage() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div className="">
        <section className="mt-[4em] grid h-[fit-content] place-items-center">
          <div className="relative grid h-[100%] w-[100%]">
            <Image
              src={"/curves/hero curve 1.svg"}
              className="cover absolute left-0 right-0 z-20 mt-[-4.4em] w-[103vw] md:mt-[-9em] lg:mt-[-13.5em] 2xl:mt-[-17.5em] "
              height={200}
              width={1250}
              alt=""
            />

            <Image
              src={"/curves/hero curve 2.svg"}
              className="cover absolute left-0 right-0 z-10 mt-[15em] w-[103vw] md:mt-[-7.5em] lg:mt-[-13em] 2xl:mt-[-19.5em] "
              height={500}
              width={1200}
              alt=""
            />

            <div className="z-50 lg:mt-[2em] 2xl:mt-[5em]">
              <div className=" flex flex-col-reverse px-[2em] text-center md:grid md:grid-cols-[1fr,1fr] md:px-[3.5em] md:text-left ">
                <Link href="https://app.getbcard.io/" className="mx-auto mt-6 block rounded-md bg-[#FF005C] px-[2.4em] py-[0.7em] md:hidden">
                  {" "}
                  Sign up Now
                </Link>
                <Image
                  src={"/images/debit-card-web.svg"}
                  className="hidden md:w-[87%] md:block"
                  height={1}
                  width={1}
                  alt="nlnjlnl"
                />
                <Image
                  src={"/images/bcard-home-hero.png"}
                  className="block w-[83%] sm:w-[50%] mx-auto md:hidden "
                  height={1}
                  width={1}
                  alt="nlnjlnl"
                />

                <div className="flex flex-col py-[2.5em]">
                  <h2 className="poppins  text-[2.2em] font-semibold md:text-[1.85em] lg:text-[2.4em] 2xl:text-[4em]">
                  The Card to support your community{" "}
                    <span className="text-[#FFB539]">with every swipe!</span>
                  </h2>
                  <p className="mt-[1em] sm:mx-auto max-w-[85%]  max-sm:mx-auto">
                    Your BCard redirects payment card fees to your favorite
                    community, and rewards you with tokens.
                  </p>
                  <Link href="https://app.getbcard.io/" className="mx-auto mt-5 hidden rounded-md bg-[#FF005C] px-[2.4em] py-[0.7em] md:block">
                    {" "}
                    Sign up Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-40 mb-2 mt-[5em]  sm:mt-[12em] grid place-items-center md:mt-[20em] 2xl:mt-[35em]">
        <div className="flex flex-wrap justify-center center-align h-[max-content] md:grid gap-[2em]  place-items-center md:grid-cols-[1fr,1fr,1fr] md:max-w-[83%] md:gap-6 max-sm:px-4">
          {card_group1.map((item, index) => (
            <>
              <div key={index} className={`${item.gradient_classname} center-align flex w-[100%] md:w-[100%] sm:w-[16em] md:h-[100%] sm:h-[30em] h-[fit-content] lg:max-w-[20em] 2xl:max-w-[30em] flex-col justify-center rounded-[1.4em] p-4 shadow-lg`}>
              <Image
                src={item.src}
                className={item.image_classname}
                height={1}
                width={1}
                alt="image"
              />

              <h3 dangerouslySetInnerHTML={{ __html: item.title }} className="text-center text-[1.6em] font-semibold pt-1"></h3>
              <p className="mt-[1em] text-center text-[0.95em] ">{item.caption}</p>
            </div>
            </>
          ))}
        </div>
        </section>

        <section className="mb-[6em] md:mb-[-38em] lg:mb-[-52em] mt-[2em] grid place-items-center md:mt-[5em] 2xl:mt-[9em]">
        <div className="flex h-[max-content] flex-col gap-[2em] p-5 md:grid md:w-[78%] md:grid-cols-[1fr,1fr,1fr]  md:gap-6">
          {card_group2.map((item, index) => (
            <>
              <div key={index} className=" center-align grid h-[100%] w-[100%] grid-rows-[9.7em,auto] justify-center rounded-[1.4em] p-4 shadow-lg">
              <Image
                src={item.src}
                className=" mx-auto max-h-[8.2em] max-w-[8.2em]"
                height={150}
                width={150}
                alt="image"
              />

              <h3 className="mt-2 text-center text-[1.65em] font-semibold ">{item.title}</h3>
              <p className="mb-2 mt-[1em] text-center text-[1em] text-[#9AA0A6]">{item.caption}</p>
            </div>
            </>
          ))}
        </div>
        
        </section>

        

        <section className="z-[100] mb-4 hidden place-items-center md:mt-[-17.5em] lg:mt-[-20em] 2xl:mt-[-68em] md:grid md:mb-[-14em] 2xl:mb-[-20em] ">
          <div className="relative grid w-[110%]">
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

        <section className="mb-[5em] mt-5 flex w-screen max-sm:mt-[10em] md:hidden">
          <div className="relative grid w-[100%] z-[50]">
            <div className="absolute">
              <Image
                src={"/images/curve 4.png"}
                className="w-[100%]"
                height={1}
                width={1}
                alt=""
              />
            </div>

            <div className="z-40 mx-auto flex w-[90%] flex-col gap-[7em] md:grid md:grid-cols-[1fr,1fr,1fr] md:gap-5">
              <div className=" center-align flex flex-col justify-center text-center md:mt-[5em]">
                <Image
                  src={"/images/android-phone.svg"}
                  className="mx-auto md:w-[34%] w-[32%]"
                  height={1}
                  width={1}
                  alt=""
                />
                <h3 className="mt-4 text-[1.4em] font-semibold ">
                  Download the App
                </h3>
                <p className="mx-auto mt-2 max-w-[80%] text-[0.95em]">
                  Get a physical/virtual card, choose a community
                </p>
              </div>

              <div className=" center-align flex flex-col justify-center text-center md:mt-[-5em]">
                <Image
                  src={"/images/credit-card-bubbles.svg"}
                  className="mx-auto md:w-[66%] w-[50%]"
                  height={1}
                  width={1}
                  alt=""
                />
                <h3 className="mx-auto  max-w-[85%] text-[1.4em] font-semibold">
                  Make purchases, get token rewards
                </h3>
                <p className="mx-auto mt-2 max-w-[80%] text-[0.95em]">
                  50% of net interchange goes to chosen community
                </p>
              </div>

              <div className=" center-align flex flex-col justify-center text-center md:mt-[4em]">
                <Image
                  src={"/images/Union.svg"}
                  className="mx-auto md:w-[50%] w-[45%]"
                  height={1}
                  width={1}
                  alt=""
                />
                <h3 className="mt-4 text-[1.4em] font-semibold ">
                  Support your community
                </h3>
                <p className="mx-auto mt-2 max-w-[80%] text-[0.95em]">{`User’s community enjoys increased economic stability and health`}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="hidden place-items-center  md:grid">
          <div className="grid w-[110%]">
            <div className="z-40 mx-auto grid w-[90%] place-items-center pt-[4em] 2xl:pt-0 text-center">
              <h2 className="mb-3 max-w-[62%] text-[3em] font-semibold 2xl:text-[4em]">
                Give your community a way to support your cause{" "}
              </h2>
              <p className="mb-[3.4em] mt-[2em] text-[1em] text-[#9AA0A6] md:max-w-[35%]">
                BCard works for every community, no matter how big or small,
                whether or not you have a token.{" "}
              </p>
            </div>
          </div>
        </section>

        <section className="relative z-50 mb-[10em] 2xl:max-w-[78%] mx-auto sm:mb-[6em] md:mb-[15em]">
          <div className="mx-auto mt-[2em] flex h-[fit-content] w-[70%] w-[90%] flex-col-reverse gap-[2em] max-sm:w-[92%] md:mx-auto sm:grid md:h-[5em] sm:grid-cols-[1fr,1fr] md:place-items-center md:gap-[6em]">
            <div className="gradient-bg-blue-purple h-[100%] w-[100%]  rounded-2xl p-5 shadow-md">
              <div className="flex  flex-col-reverse gap-2 pt-4 md:grid md:grid-cols-[70%,30%]">
                <h2 className="text-[1.6em] font-semibold max-sm:mt-[-1.8em] md:px-4 md:text-[1.4em] lg:text-[1.5em] 2xl:text-[2em]">
                  {`Bcard powers your community’s `}
                  {<span className="text-[#08BFFF]">economic</span>} engine
                </h2>
                <div>
                  <Image
                    src={"/images/image 22.svg"}
                    className="w-[50%] sm:w-[38%] md:my-auto mix-blend-screen max-sm:mx-auto max-sm:mt-[-3.6em]  max-sm:h-[10%] md:rotate-0 max-sm:rotate-90 sm:rotate-90 sm:mx-auto md:w-[90%]"
                    height={1}
                    width={1}
                    alt=""
                  />
                </div>
              </div>
              <p className="mt-4 hidden text-center md:block ">
                Using BCard, each member of your community creates recurring
                revenue with their existing everyday spending
              </p>
            </div>

            <div className="gradient-bg-green-purple h-[100%] w-[100%] rounded-2xl p-5 shadow-md">
              <div className="flex flex-col-reverse justify-between gap-2 pt-4 md:grid md:grid-cols-[70%,30%]">
                <h2 className="text-[1.6em] font-semibold max-sm:mt-5 md:px-4 md:text-[1.4em] lg:text-[1.5em] 2xl:text-[2em]">
                  <span className="text-[#14FF00]">Fuelling</span> projects and
                  aspirations with every swipe
                </h2>
                <div className="flex justify-center gap-[1.5em] md:block mb-3 md:mb-0  sm:mt-4 sm:mb-[1.7em]">
                  <Image
                    src={"/images/arrow.svg"}
                    className="mix-blend-screen w-[22%] md:w-[80%]"
                    height={1}
                    width={1}
                    alt=""
                  />
                  <Image
                    src={"/images/arrow.svg"}
                    className="block w-[22%] mix-blend-screen md:hidden"
                    height={1}
                    width={1}
                    alt=""
                  />
                </div>
              </div>
              <p className="mt-4 hidden text-center md:block ">{`BCard uses payment card fees to buy your community’s tokens from a DEX, creating organic token demand.`}</p>
            </div>
          </div>
        </section>

        <section className="grid place-items-center md:mt-[25em] md:hidden">
          <button className=" z-50 mx-auto mt-5 rounded-md border border-white bg-[black] px-[2.6em] py-[0.7em]">
            Meet all of us
          </button>
        </section>

        <section className="mb-[5em] mt-[5em] grid place-items-center md:mt-[25em] 2xl:mt-[28em]">
          <h3 className="tracking-[0.7em] 2xl:text-[1.5em]">OUR PARTNERS</h3>
          <div className="center-align mt-[4em] 2xl:mt-[6em] flex w-[50%] md:justify-between gap-[4em] max-sm:flex-col justify-center">
            <Image
              src={"/images/image 15.svg"}
              className="mx-auto w-[6em] 2xl:w-[9em]"
              height={1}
              width={1}
              alt=""
            />
            <Image
              src={"/images/DAO Logo.svg"}
              className="mx-auto w-[6em] 2xl:w-[9em]"
              height={1}
              width={1}
              alt=""
            />

            <Image
              src={"/images/image 16.svg"}
              className="mx-auto w-[6em] 2xl:w-[9em]"
              height={1}
              width={1}
              alt=""
            />
          </div>
        </section>

        <section className="mb-[5em] mt-[10em]  grid place-items-center">
          <h3 className="mb-[1.5em] text-center text-[1.8em] 2xl:text-[2.5em] font-semibold ">
            Contact us
          </h3>
          <div className="center-align flex w-[90%] flex-col justify-center gap-4 md:w-[65%]">
            <div className="flex w-[100%] gap-4 max-sm:w-[200%] max-sm:flex-col">
              <input
                type="text"
                placeholder="Name"
                className="w-[50%] rounded-lg border border-gray-600 bg-[#1C1C1C] p-2 pl-4 text-white placeholder-gray-400"
              />
              <input
                type="text"
                placeholder="TheDaoist@protonmail.com"
                className="w-[50%] rounded-lg border border-gray-600 bg-[#1C1C1C] p-2 pl-4 text-white placeholder-gray-400"
              />
            </div>
            <div className="flex w-[100%] gap-4 max-sm:w-[200%] max-sm:flex-col">
              <input
                type="text"
                placeholder="Discord Handle"
                className="w-[50%] rounded-lg border border-gray-600 bg-[#1C1C1C] p-2 pl-4 text-white placeholder-gray-400"
              />
              <input
                type="text"
                placeholder="Organization"
                className="w-[50%] rounded-lg border border-gray-600 bg-[#1C1C1C] p-2 pl-4 text-white placeholder-gray-400"
              />
            </div>
            <div>
              <textarea
                placeholder="Write a message for us!"
                className="h-60 w-[100%] rounded-lg border border-gray-600 bg-[#1C1C1C] p-2 pl-4 text-white placeholder-gray-400"
              ></textarea>
            </div>
          </div>
          <Link href="https://support.getbcard.io/" className="mx-auto mt-[2em] rounded-md bg-[#FF005C] px-[2.6em] py-[0.7em]">
            {" "}
            Contact us
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
}
