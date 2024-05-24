import { Heading, Text} from "@chakra-ui/react";

export default function Footer(){
    return(
        <div className=" bg-slate-800 p-20 text-white flex justify-between">
             <div className="flex flex-col gap-3">
                <Heading as='h4' size='md'>Ari Connect</Heading>
                <Text fontSize='lg'>WEBSITE DESIGNED FOR ARI CONNECT</Text>
             </div>
             <div className="flex flex-col ">
                <div className="flex gap-5 flex-row-reverse">
                    <Text fontSize='lg'>Terms</Text>
                    <Text fontSize='lg'>Support</Text>
                </div>
                <Text fontSize='lg'>© 2024 Ari Connect. Not affiliated with Discord.</Text>
             </div>
        </div>
    )
}