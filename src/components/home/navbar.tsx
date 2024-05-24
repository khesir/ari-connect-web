import { Avatar, Heading } from "@chakra-ui/react";


export default function Navbar(){
    return(
        <div className="w-full flex justify-around text-white bg-slate-800">
            {/* Left nav */}
            <div className="flex items-center gap-5 px-10 ">
                <Heading as='h4' size='md'>Ari Connect</Heading>
                <div className=" flex gap-5">
                    <Heading as='h6' size='xs'>Docs</Heading>
                    <Heading as='h6' size='xs'>Invite</Heading>
                    <Heading as='h6' size='xs'>Support</Heading>
                </div>

            </div>
            {/* use information */}
            <div className="flex items-center gap-3 p-3 ">
                <Avatar/>
                {/* User name */}
                <Heading as='h6' size='xs'>Khesir</Heading>
            </div>
        </div>
    )
}