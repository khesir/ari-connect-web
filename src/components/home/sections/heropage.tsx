"use client"

import {motion} from 'framer-motion';
import  styles from '@/styles/index'
import { Button, Heading, Text } from "@chakra-ui/react";

import icon from "@/assets/hero-logo.png"
import Image from "next/image";
import { slideIn, staggerContainer } from '@/utils/motion';
import ServerStats from '../component/server-stats';

export default function HeroPage(){
    return(
        <section className={` max-w-[1920px] mx-auto py-6 px-6 pt-40 relative z-0 `}>
            {/* Text animation */}
            <div className={` flex justify-around lg:flex-row items-center flex-col-reverse gap-16 lg:gap-10 relative`}>
                <div className="flex flex-col gap-4 max-w-lg">
                    <Heading as='h2' size='xl' className="text-pink-400">A Global Chat bot for Discord</Heading>
                    <Text fontSize='lg' className=" text-black">Ari Connect - Connects Your Favorite Servers to a Single Channel</Text>
                    <div className="flex justify-center lg:justify-start gap-5">
                        <Button colorScheme='blue' size="md">Dashboard</Button>
                        <Button colorScheme='blue' size="md" variant={"outline"}>Learn More</Button>
                    </div>
                    <div className='hidden lg:block absolute -bottom-10'>
                        <ServerStats/>
                    </div>
                </div>
                
               
                <div className='flex justify-center items-center relative'>
                    <Image 
                        src={icon}
                        width={400}
                        height={400}
                        alt="ari-hero-logo"/>
                    <div className='block lg:hidden absolute -bottom-10'>
                        <ServerStats/>
                    </div>
                </div>           
            </div>
        </section>
        
    )
}