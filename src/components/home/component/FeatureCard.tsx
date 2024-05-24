import { Heading, Text } from "@chakra-ui/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";


type Content = {
    img: StaticImport,
    title: String,
    content : String
}

export function FeatureCard({img, title,content}: Content){
    return(
        <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:justify-around">
            <div className="flex flex-col gap-3 lg:w-2/6 text-black">
                <Heading as='h2' size='xl' >
                    {title}
                </Heading>
                <Text fontSize='xl'>
                    {content}
                </Text>
            </div>
            <Image
                src={img}
                width={300}
                height={300}
                alt = "Feature"
            /> 
        </div>
    )
}