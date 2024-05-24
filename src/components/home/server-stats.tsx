import { Heading } from "@chakra-ui/react";

type Props = React.HTMLAttributes<HTMLDivElement>;


// TODO: Make this headings responsive or in other compontnets
export default function ServerStats(props: Props) {
    return(
        <div {...props} className={`flex justify-center text-purple-900 ${props.className || ''}`}>
            <div className=" flex gap-36 justify-between border-4 px-5 lg:px-20 py-5 rounded-2xl bg-white border-solid border-pink-300">
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
        </div>
    )
}