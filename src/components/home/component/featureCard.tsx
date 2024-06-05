import { Heading,Text } from "@chakra-ui/react";
import { IconType } from "react-icons"


type FeatureProps = {
    icon: IconType;
    title: string;
    content: string;
}

export function FeatureCard ({icon: Icon, title , content}: FeatureProps){
    return(
        <div className="flex flex-col gap-4 max-w-[300px]">
            <div className="flex items-center gap-5">
                    
                <Icon size={25}/>
                <Heading as='h5' size='sm' >
                    {title}
                </Heading>
            </div>

            <Text fontSize='xs'>
                {content}
            </Text>
        </div>
    )
}