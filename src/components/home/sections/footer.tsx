import { Heading, Text} from "@chakra-ui/react";

import { IoLogoDiscord } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import Link from "next/link";


export default function Footer(){
    return(
        <footer className="max-w-[1280px] mx-auto relative px-20 pt-10">
                <div className="flex flex-row justify-between gap-10 pb-5 items-center text-white">
                    <div className="flex flex-col gap-3">
                        <Heading as='h5' size='sm'>Pages</Heading>
                        <div className=" text-[#4A5568]">
                            <Link href={"#"}>
                                <Text fontSize='md'>Rules</Text>
                            </Link>
                            <Link href={"#"}>
                                <Text fontSize='md'>Partners</Text>
                            </Link>
                            <Link href={"#"}>
                                <Text fontSize='md'>Feedback</Text>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                        <Heading as='h5' size='sm'>Info</Heading>
                        <div className=" text-[#4A5568]">
                            <Link href={"/team"}>
                                <Text fontSize='md'>Team</Text>
                            </Link>
                            <Link href={"#"}>
                                <Text fontSize='md'>Legal</Text>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Heading as='h5' size='sm'>Support us</Heading>
                        <div className=" text-[#4A5568]">
                            <Link href={"#"}>
                                <Text fontSize='md'>Donation</Text>
                            </Link>
                            <Link href={"https://github.com/Ari-World"}>
                                <Text fontSize='md'>Contribute</Text>
                            </Link>
                        </div>
                    </div>


                    <div className="hidden md:block">
                        <Heading as='h4' size='md'>Ari Connect</Heading>
                        <Text fontSize='md'>WEBSITE DESIGNED FOR ARI CONNECT</Text>
                    </div>
                </div>
                <div className="flex justify-between border-t-2 text-[#4A5568] py-8">
                    
                    <Heading as='h6' size='xs'>Copyright @ 2024 Ari Connect</Heading>
                    <Heading as='h6' size='xs'>Developed by Khesir</Heading>
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