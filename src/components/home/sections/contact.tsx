import { Button, Heading, Text } from "@chakra-ui/react";

import { IoLogoDiscord } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";


export default function ContactPage(){
    return(
        <section className="max-w-[1280px] p-20 mx-auto text-white">
            <div className="  flex flex-col justify-center items-center gap-20">
                <Heading as='h2' size='xl'>Contact</Heading>
                <div className="flex flex-col lg:flex-row justify-around gap-10">
                    <div className=" flex flex-col items-center gap-10 lg:px-20">
                        <Heading as='h5' size='sm' >
                            Contact  us by writing a ticket
                        </Heading>
                        <Button size="lg" colorScheme="pink">
                            Create a ticket
                        </Button>
                    </div>
                    <div className=" flex flex-col gap-5 lg:px-20">
                        <div className="flex gap-3 items-center">
                            <IoLogoDiscord size={50} color="#4A5568"/>
                            <div className="">
                            <Heading as='h5' size='sm' className="pb-3" >
                                Support
                            </Heading>
                            <Text fontSize='md' color="#4A5568">
                                We have open source this project
                            </Text>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <BsGithub size={50} color="#4A5568"/>
                            <div className="">
                            <Heading as='h5' size='sm' className="pb-3" >
                                Contribute
                            </Heading>
                            <Text fontSize='md' color="#4A5568">
                                https://discord.gg/HnjyK33cJp
                            </Text>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <AiFillTwitterCircle size={50} color="#4A5568"/>
                            <div className="">
                            <Heading as='h5' size='sm' className="pb-3" >
                                Twitter
                            </Heading>
                            <Text fontSize='md' color="#4A5568">
                                We post some stuffs there
                            </Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}