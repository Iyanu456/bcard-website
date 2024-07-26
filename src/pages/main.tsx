//()
import Image from "next/image";

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
  return (
    <>
      <div className="">
        <header className="mx-[1em] mt-[1em] mb-[2em] rounded-lg bg-[#2D2D2D] text-white md:mx-[2.2em]">
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
              <div className=" flex flex-col-reverse px-[2em] text-center md:grid md:grid-cols-[1fr,1fr] md:px-[3.5em] md:text-left ">
                <button className="mx-auto mt-6 block rounded-md bg-[#FF005C] px-[2.4em] py-[0.7em] md:hidden">
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
                  <button className="mx-auto mt-5 hidden rounded-md bg-[#FF005C] px-[2.4em] py-[0.7em] md:block">
                    {" "}
                    Sign up Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5 mt-[5em] grid place-items-center md:mt-[15em]">
          <div className="flex h-[max-content] flex-col gap-[3em] p-5 md:grid md:w-[76%] md:grid-cols-[1fr,1fr,1fr]  md:gap-6">
            <div className="gradient-bg-1 center-align flex h-[100%] w-[100%] flex-col justify-center rounded-[1.4em] p-4 shadow-lg">
              <Image
                src={"/images/card 1.png"}
                className="cover mx-auto w-[100%]"
                height={1}
                width={1}
                alt="image"
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

            <div className="gradient-bg-2 center-align flex h-[100%] w-[100%] flex-col justify-center rounded-[1.4em] p-4 shadow-lg">
              {" "}
              <Image
                src={"/images/card 2.png"}
                className="cover mx-auto w-[90%]"
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

        <section className="mb-[6em] mt-[8em] grid w-screen place-items-center">
          <div className="flex flex-col gap-1 gradient-bg-table px-2 md:px-5 pb-5 rounded-2xl">
            <div className="grid h-[75px] w-[86vw] md:w-[73vw] md:grid-cols-[120px,1fr,1fr,1fr,1fr] grid-cols-[0fr,1fr,1fr,1fr,1fr] gap-3 text-center">
              <div className="h-[100%] w-[100%] "></div>
              <div className="h-[100%] w-[100%] text-[1em] md:text-[1.25em] font-semibold">BCard</div>
              <div className="h-[100%] w-[100%] text-[0.82em] md:text-[1em] font-semibold">Borderless banking cards</div>
              <div className="h-[100%] w-[100%] text-[0.82em] md:text-[1em] font-semibold">Crypto reward cards</div>
              <div className="h-[100%] w-[100%] text-[0.82em] md:text-[1em] font-semibold">Crypto spend cards</div>
            </div>
            {comparisonData.map((item, value) => (
              <>
                <div className="flex flex-col md:grid text-center h-[fit-content] md:h-[70px] w-[100%] md:grid-cols-[120px,auto] gap-3">
                <hr className="md:hidden block bg-[grey] border-[grey]"></hr>
                  <div className="h-[100%] w-[100%] font-semibold max-sm:text-[0.7] text-left md:text-center pl-5 text-[0.96em]">{item.name}</div>
                  <hr className="md:hidden block bg-[grey] border-[grey]"></hr>
                  <div className="grid h-[100%] w-[100%] grid-cols-[1fr,1fr,1fr,1fr] gap-3 mb-[1em]">
                    <div className="h-[100%] w-[100%]">{item.fields[0] ? 
                        <Image
                            src={"/images/green-tick.png"}
                            className="cover mx-auto min-w-[50px] mt-0"
                            height={1}
                            width={1}
                            alt="image"
                        /> : "no"}
                    </div>
                    <div className="h-[100%] w-[100%]">{item.fields[1] ? "yes" : null}</div>
                    <div className="h-[100%] w-[100%]">{item.fields[2] ? "yes" : null}</div>
                    <div className="h-[100%] w-[100%]">{item.fields[3] ? "yes" : null}</div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
