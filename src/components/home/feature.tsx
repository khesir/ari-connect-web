import { Heading } from "@chakra-ui/react";
import image2 from "@/assets/image-2.jpg"
import { FeatureCard } from "./component/FeatureCard";

const mockDataFeature = [
    {
    img : image2,
    title: "Feature #1",
    content: "Lorem ipsum dolor sit amet. Aut quibusdam culpa et voluptate eius sed ipsa debitis ex voluptatibus rerum est enim amet et dicta alias",
    },{
    img : image2,
    title: "Feature #2",
    content: "Lorem ipsum dolor sit amet. Aut quibusdam culpa et voluptate eius sed ipsa debitis ex voluptatibus rerum est enim amet et dicta alias",
    },{
    img : image2,
    title: "Feature #3",
    content: "Lorem ipsum dolor sit amet. Aut quibusdam culpa et voluptate eius sed ipsa debitis ex voluptatibus rerum est enim amet et dicta alias",
    },
]


export default function FeaturePage(){
    return(
        <div className="flex flex-col items-center justify-center gap-10 p-5">
            <Heading as='h2' size='xl' className=" text-black border-b-4 border-pink-300">Features</Heading>
            <div className=" flex flex-col gap-10">
            {mockDataFeature.map((d,i) => (
                <FeatureCard key={i}img={d.img} title={d.title} content={d.content}/>
            ))}
            </div>
            
        </div>
    )
}