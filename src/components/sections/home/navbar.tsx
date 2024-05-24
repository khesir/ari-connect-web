import { Avatar, Heading } from "@chakra-ui/react";
import React from "react";


export default function Navbar(){
    return(
        <div className=" flex justify-around m-5 text-pink-400">
            {/* Left nav */}
            <div className=" flex border-solid border items-center gap-5 p-5 rounded-2xl border-pink-400">
                <Heading as='h4' size='md'>Ari Connect</Heading>
                <div className=" flex gap-5">
                    <Heading as='h6' size='xs'>Docs</Heading>
                    <Heading as='h6' size='xs'>Invite</Heading>
                    <Heading as='h6' size='xs'>Support</Heading>
                </div>

            </div>
            {/* use information */}
            <div className="flex border-solid border items-center gap-5 p-3 rounded-2xl border-pink-400">
                <Avatar/>
                {/* User name */}
                <Heading as='h6' size='xs'>Khesir</Heading>
            </div>
        </div>
    )
}