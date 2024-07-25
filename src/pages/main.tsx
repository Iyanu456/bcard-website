
//()
import Image from "next/image"

export default function LandingPage() {
    return (
        <>
            <div className="">
                <header className="mx-[2em] my-[2em] rounded-lg text-white bg-[#2D2D2D]">
                    <div className="px-[1em] md:px-[25] py-[1.2em] flex">
                        <Image src={"/images/logo-dark.svg"} height={100} width={100} alt="logo" />
                        <button className="mr-0 ml-auto"><Image className=" min-w-[25px]" src={"/images/hamburger.svg"} height={1} width={1} alt="ham" /></button>
                    </div>
                </header>

                <section className="h-[fit-content] grid place-items-center mt-[4em]">
                    <div className="relative grid">
                    
                    <Image src={"/images/curve 1.svg"} className="w-[100%]" height={1} width={1} alt=""/>
                    

                    
                    <Image src={"/images/curve 2.svg"} className="w-[150%] absolute cover z-10 pt-3" height={1} width={1} alt=""/>
                   
                    
                    <div>
                        <div className="absolute z-50 top-[-2em] md:grid md:grid-cols-[1fr,1fr] px-[2em] md:px-[2.6em] flex flex-col-reverse text-center md:text-left ">
                            <Image src={"/images/debit-card-web.svg"} className="w-[86%] hidden md:block" height={1} width={1} alt="nlnjlnl"/>
                            <Image src={"/images/bcard-home-hero.png"} className="w-[86%] block md:hidden " height={1} width={1} alt="nlnjlnl"/>
                            <div className="py-[2.5em] flex flex-col">
                                <h2 className="poppins leading-10 lg:leading-[1.3em] text-[1.85em] lg:text-[2.4em] font-semibold ">The Card to support your community <span className="text-[#7F7F7F]" >with every swipe!</span></h2>
                                <p className="max-sm:mx-auto max-w-[85%] text-[#A1A1A1] mt-[1em]">Your BCard redirects payment card fees to your favorite community, and rewards you with tokens.</p>
                                <button className="mx-auto mt-5 bg-[#FF005C] px-[2.4em] py-[0.7em] rounded-md"> Sign up Now 
                                </button>
                            </div>
                        </div>
                    </div>
                    

                    
                    
                    </div>
                   
                </section>

                <section className="grid p-5 mt-[5em]">
                    <div className="relative grid place-items-center  p-4 rounded-lg shadow-lg gradient-bg w-[300px] h-[400px]">
                        <h3 className="text-[1.5em] leading-7 text-center">The <span className="text-[#FF5810]">community</span> owned card</h3>
  
                    </div>
                </section>
                
            </div>
        </>
    )
}