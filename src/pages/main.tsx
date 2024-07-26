//()
import Image from "next/image";

export default function LandingPage() {
  return (
    <>
      <div className="">
        <header className="mx-[1em] md:mx-[2.2em] my-[2em] rounded-lg bg-[#2D2D2D] text-white">
          <div className="flex px-[1em] py-[1.2em] md:px-[25]">
            <Image
              src={"/images/logo-dark.svg"}
              height={100}
              width={100}
              alt="logo"
            />
            <button className="ml-auto mr-0">
              <Image
                className=" min-w-[25px]"
                src={"/images/hamburger.svg"}
                height={1}
                width={1}
                alt="ham"
              />
            </button>
          </div>
        </header>

        <section className="mt-[4em] grid h-[fit-content] place-items-center">
          <div className="relative grid h-[100%] w-[100%]">
            <Image
              src={"/images/curve 1.svg"}
              className="absolute w-[100%]"
              height={1}
              width={1}
              alt=""
            />

            <Image
              src={"/images/curve 2.svg"}
              className="cover absolute z-10 w-[150%] pt-3"
              height={1}
              width={1}
              alt=""
            />

            <div className="z-50">
              <div className=" flex flex-col-reverse px-[2em] text-center md:grid md:grid-cols-[1fr,1fr] md:px-[2.6em] md:text-left ">
              <button className="mx-auto mt-6 rounded-md bg-[#FF005C] md:hidden block px-[2.4em] py-[0.7em]">
                    {" "}
                    Sign up Now
                  </button>
                <Image
                  src={"/images/debit-card-web.svg"}
                  className="hidden w-[86%] md:block"
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
                  <h2 className="poppins text-[1.85em] font-semibold leading-10 lg:text-[2.4em] lg:leading-[1.3em] ">
                    The Card to support your community{" "}
                    <span className="text-[#7F7F7F]">with every swipe!</span>
                  </h2>
                  <p className="mt-[1em] max-w-[85%] text-[#A1A1A1] max-sm:mx-auto">
                    Your BCard redirects payment card fees to your favorite
                    community, and rewards you with tokens.
                  </p>
                  <button className="mx-auto mt-5 rounded-md md:block hidden bg-[#FF005C] px-[2.4em] py-[0.7em]">
                    {" "}
                    Sign up Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5 mt-[5em] md:mt-[15em] grid place-items-center">
          <div className="flex h-[max-content] flex-col gap-[3em] p-5 md:grid md:w-[76%] md:grid-cols-[1fr,1fr,1fr]  md:gap-5">
            <div className="gradient-bg-1 flex  h-[100%] w-[100%] flex-col rounded-[1.4em] p-4 shadow-lg">
              <Image
                src={"/images/card 1.png"}
                className="cover w-[110%]"
                height={1}
                width={1}
                alt="nlnjlnl"
              />

              <h3 className="mt-2 text-center text-[1.6em] font-semibold leading-8 ">
                The <span className="text-[#FF5810]">community</span> owned
                card!
              </h3>
              <p className="mb-2 mt-[1em] text-center text-[0.95em] leading-5">
                Your Defy Card is by DAOs, for DAOs. Unlike centralized crypto
                cards, you have a say in how we build the future.
              </p>
            </div>

            <div className="gradient-bg-2 flex  h-[100%] w-[100%] flex-col rounded-[1.4em] p-4 shadow-lg">
           
                {" "}
                <Image
                  src={"/images/card 1.png"}
                  className="cover w-[110%]"
                  height={1}
                  width={1}
                  alt="nlnjlnl"
                />
        

              <h3 className="mt-2 text-center text-[1.6em] font-semibold leading-8 ">
              Support your <span className="text-[#13B5EC]">favorite</span> communities
              </h3>
              <p className="mb-2 mt-[1em] text-center text-[0.95em] leading-5">
                Your Defy Card is by DAOs, for DAOs. Unlike centralized crypto
                cards, you have a say in how we build the future.
              </p>
            </div>

            <div className="gradient-bg-3 flex  h-[100%] w-[100%] flex-col rounded-[1.4em] p-4 shadow-lg">
        
                {" "}
                <Image
                  src={"/images/card 1.png"}
                  className="cover w-[110%]"
                  height={1}
                  width={1}
                  alt="nlnjlnl"
                />
         
              <h3 className="mt-2 text-center text-[1.6em] font-semibold leading-8 ">
              Easily  
              <span className="text-[#27FFA4]"> onboard</span> new members
              </h3>
              <p className="mb-2 mt-[1em] text-center text-[0.95em] leading-5">
                Your Defy Card is by DAOs, for DAOs. Unlike centralized crypto
                cards, you have a say in how we build the future.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
