import { Heading, Text} from "@chakra-ui/react";

import { IoLogoDiscord } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";


export default function Footer(){
    return(
        <footer className=" max-w-[1920px] px-20 pt-10 text-white flex flex-col">
             <div className="flex justify-between pb-5 items-center">
                <div className=" flex gap-20">
                    <div className="flex flex-col gap-3">
                        <Heading as='h5' size='sm'>Pages</Heading>
                        <div className=" text-[#4A5568]">
                            <Text fontSize='md'>Rules</Text>
                            <Text fontSize='md'>Partners</Text>
                            <Text fontSize='md'>Feedback</Text>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                    <Heading as='h5' size='sm'>Info</Heading>
                    <div className=" text-[#4A5568]">
                        <Text fontSize='md'>Team</Text>
                        <Text fontSize='md'>Legal</Text>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <Heading as='h5' size='sm'>Support us</Heading>
                    <div className=" text-[#4A5568]">
                        <Text fontSize='md'>Donation</Text>
                        <Text fontSize='md'>Contribute</Text>
                    </div>
                </div>
                </div>


                <div>
                    <Heading as='h4' size='md'>Ari Connect</Heading>
                    <Text fontSize='md'>WEBSITE DESIGNED FOR ARI CONNECT</Text>
                </div>
             </div>
             <div className="flex justify-between border-t-2 text-[#4A5568] py-8">
                
                <Heading as='h6' size='xs'>Copyright @ 2024 Ari Connect</Heading>
                <Heading as='h6' size='xs'>Copyright @ 2024 Ari Connect</Heading>
                <div className=" flex items-center gap-3">
                    <IoLogoDiscord size={30}/>
                    <BsGithub size={30}/>
                    <AiFillTwitterCircle size={30}/>
                </div>
             </div>
        </footer>
    )
}

//