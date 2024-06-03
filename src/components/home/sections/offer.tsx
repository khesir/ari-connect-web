import { Heading } from "@chakra-ui/react";
import image1 from "../../../../public/cross_server_chatting.png"
import Image from "next/image";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { OfferCard } from "../component/offerCard";


const offers = [
    {
        icon: IoCheckmarkCircleSharp,
        title: "Easy 2 Step Setup"
    },
    {
        icon: IoCheckmarkCircleSharp,
        title: "Instant Mod & Staff Contact"
    },
    {
        icon: IoCheckmarkCircleSharp,
        title: "Achievement and  Vanity Badges"
    },
    {
        icon: IoCheckmarkCircleSharp,
        title: "Seamless Multi-server Chatting"
    },
    {
        icon: IoCheckmarkCircleSharp,
        title: "Friendly Global Community"
    },
    {
        icon: IoCheckmarkCircleSharp,
        title: "Dashboard Control for you private lobbies"
    },
    {
        icon: IoCheckmarkCircleSharp,
        title: "Safety & Security on Lobbies"
    }
]



export default function OfferPage(){
    return(
        <section className="w-full flex flex-col items-center justify-center relative px-4 py-6 sm:p-20">
            <div className="max-w-[1080px] flex flex-col-reverse lg:flex-row justify-between gap-10 text-white">
                <div className="flex flex-col gap-5">
                    <div className=" flex justify-start items-center">
                        <Heading as='h2' size='xl' className="min-w-[300px]">What we offer</Heading>
                        <div className=" w-full h-1 bg-pink-300"/>
                    </div>
                    <div className=" grid grid-cols-2 gap-10">
                    {offers.map((offer, index) => (
                        <OfferCard key={index} icon={offer.icon} title={offer.title}/>
                    ))}
                    </div>

                </div>
                <div className='flex justify-center items-center'>
                    <Image 
                        src={image1}
                        width={500}
                        height={500}
                        alt="ari-hero-logo"/>
                   
                </div>         
            </div>
        </section>
    )
}