import { Heading } from "@chakra-ui/react";

// TODO: Make this headings responsive or in other compontnets
export default function ServerStats() {
    return(
            <div className=" flex gap-10 justify-between border-4 px-5 lg:px-20 py-5 rounded-2xl bg-white border-solid border-pink-300">
                <div className=" flex flex-col gap-3 items-center">
                    <Heading as='h4' size='md'>200</Heading>
                    <Heading as='h4' size='md'>Server</Heading>
                </div>
                <div className=" flex flex-col gap-3 items-center">
                    <Heading as='h4' size='md'>10,000+</Heading>
                    <Heading as='h4' size='md'>Users</Heading>
                </div>
                <div className=" flex flex-col gap-3 items-center">
                    <Heading as='h4' size='md'>24x7</Heading>
                    <Heading as='h4' size='md'>Uptime</Heading>
                </div>
            </div> 
    )
}