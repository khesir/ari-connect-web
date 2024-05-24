import { Button, Heading, Text } from "@chakra-ui/react";

import icon from "@/assets/hero-logo.png"
import Image from "next/image";

export default function HeroPage(){
    return(
        <div className="flex items-center justify-around ">
            <div className="flex flex-col-reverse lg:flex-row justify-center gap-32 items-center">
                <div className="flex flex-col gap-5">
                    <Heading as='h2' size='xl' className="text-pink-400">A Global Chat bot for Discord</Heading>
                    <Text fontSize='lg' className=" text-white">Ari Connect - Connects Your Favorite Servers to a Single Channel</Text>
                    <div className="flex justify-center lg:justify-start">
                        <Button colorScheme='blue' size="md">Login using Discord</Button>
                    </div>
                </div>
                
                <Image 
                    src={icon}
                    width={400}
                    height={400}
                    alt="ari-hero-logo"/>                    
            </div>
        </div>
    )
}