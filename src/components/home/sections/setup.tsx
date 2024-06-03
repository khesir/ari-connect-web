import { Heading } from "@chakra-ui/react";
import image1 from "../../../../public/setup_tutorial.png"
import Image from "next/image";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { OfferCard } from "../component/offerCard";
import { SetupCard } from "../component/setupCard";


const offers = [
    {
        title: "Use the command /connect"
    },
    {
        title: "Choose a specific lobby you want to connect"
    },
    {
        title: "Start Chatting"
    }
]


export default function SetupPage(){
    return(
        <section className="w-full flex flex-col items-center justify-center relative px-4 py-20 sm:p-20">
            <div className=" max-w-[1080px] flex flex-col lg:flex-row justify-between gap-10 text-white">
                <div className='flex justify-center items-center'>
                    <Image 
                        src={image1}
                        width={500}
                        height={500}
                        alt="ari-hero-logo"/>
                   
                </div>
                <div className=" flex flex-col gap-5 lg:px-32">
                    <div className=" flex justify-start items-center gap-2">
                        <Heading as='h2' size='xl' className="min-w-[230px]" >How to setup</Heading>
                        
                        <div className=" w-full h-1 bg-pink-300"/>
                    </div>
                    <div className="flex flex-col gap-5">
                    {offers.map((offer, index) => (
                        <SetupCard key={index} title={offer.title} count={index}/>
                    ))}
                    </div>

                </div>
                         
            </div>
        </section>
    )
}