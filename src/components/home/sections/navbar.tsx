"use client"

import  styles from '@/styles/index'

import { Button, Heading } from "@chakra-ui/react";
import Link from 'next/link';

// TODO: Implement a Hamburger to the navigation
export default function Navbar(){
    return(
            // TODO: On scroll change bg to bg-[#1A202C] this color 
            //  TODO: Insert a condition for the nav if its in / this route color white else the this color bg-[#1A202C]
            <div className={`w-full px-10 bg-white fixed flex items-center justify-between text-black bg-slate-80 z-50`}>
            {/* Left nav */}
                <Heading as='h4' size='md'>Ari Connect</Heading>
                {/* use information */}
                {/* TODO: Insert a hover animation when on hover */}
                <div className="flex items-center gap-3 p-3 ">
                    <Link href={"#"}  target='_blank'>
                        <Heading as='h6' size='sm'>News</Heading>
                    </Link>
                    <Link href={"https://discord.com/oauth2/authorize?client_id=895242125208342548"} target='_blank'>
                        <Heading as='h6' size='sm'>Invite</Heading>
                    </Link>
                    <Link href={"https://discord.gg/HnjyK33cJp"}  target='_blank'>
                        <Heading as='h6' size='sm'>Support</Heading>
                    </Link>
                    
                    <Button colorScheme='blue' size='md' width={36}>
                        Login
                    </Button>

                    {/* If Authenticated */}
                    {/* <Avatar/> */}
                    {/* User name */}
                    {/* <Heading as='h6' size='xs'>Khesir</Heading> */}
                </div>
            </div>
        
    )
}