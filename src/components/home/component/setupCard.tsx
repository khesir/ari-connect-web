import { Heading } from "@chakra-ui/react";
import { IconType } from "react-icons";


type OfferProps = {
    title: string;
    count: number;
}

export function SetupCard({ title, count } : OfferProps){
    return(
        <div className=" flex items-center gap-5 max-w-[300px]">
            <div className="flex justify-center items-center bg-slate-400 p-2 sm:p-5 rounded-xl">
                <Heading as='h5' size='sm' >
                 0{count}
                </Heading>

            </div>
            <Heading as='h6' size='xs' >
                    {title}
            </Heading>
        </div>
    )
}