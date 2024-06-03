"use client"

import  styles from '@/styles/index'

import { Button, Heading } from "@chakra-ui/react";

// TODO: Implement a Hamburger to the navigation
export default function Navbar(){
    return(
        <div className={`px-4 sm:px-24 lg:px-32 py-4 pb-20 w-full`}>
            <div className={` max-w-[1920px] mx-auto flex items-center justify-between text-black bg-slate-80`}>
            {/* Left nav */}
                <Heading as='h4' size='md'>Ari Connect</Heading>
                {/* use information */}
                <div className="flex items-center gap-3 p-3 ">
                    <Heading as='h6' size='sm'>News</Heading>
                    <Heading as='h6' size='sm'>Invite</Heading>
                    <Heading as='h6' size='sm'>Support</Heading>
                    <Button colorScheme='blue' size='md' width={36}>
                        Login
                    </Button>

                    {/* If Authenticated */}
                    {/* <Avatar/> */}
                    {/* User name */}
                    {/* <Heading as='h6' size='xs'>Khesir</Heading> */}
                </div>
            </div>
        </div>
        
    )
}