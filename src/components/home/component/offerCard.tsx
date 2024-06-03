import { Heading } from "@chakra-ui/react";
import { IconType } from "react-icons";


type OfferProps = {
    icon: IconType;
    title: string;
}

export function OfferCard({icon: Icon, title } : OfferProps){
    return(
        <div className=" flex items-center gap-5 max-w-[300px]">
            <div className="flex justify-center items-center bg-slate-400 p-2 sm:p-5 rounded-xl">
                <Icon size={30}/>
            </div>
            <Heading as='h6' size='xs' >
                    {title}
            </Heading>
        </div>
    )
}