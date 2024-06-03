import { Heading} from "@chakra-ui/react";
import { BsClockHistory } from "react-icons/bs";
import { FeatureCard } from "../component/featureCard";


const features = [
    {
        icon: BsClockHistory,
        title: "Cross-Server Messaging",
        content: "Ari Connect World is a Global Network linking multiple Discord servers, enabling seamless cross-server communication.",
    },
    {
        icon: BsClockHistory,
        title: "Cross-Server Messaging",
        content: "Ari Connect World is a Global Network linking multiple Discord servers, enabling seamless cross-server communication.",
    },
    {
        icon: BsClockHistory,
        title: "Cross-Server Messaging",
        content: "Ari Connect World is a Global Network linking multiple Discord servers, enabling seamless cross-server communication.",
    },
    {
        icon: BsClockHistory,
        title: "Cross-Server Messaging",
        content: "Ari Connect World is a Global Network linking multiple Discord servers, enabling seamless cross-server communication.",
    },
    {
        icon: BsClockHistory,
        title: "Cross-Server Messaging",
        content: "Ari Connect World is a Global Network linking multiple Discord servers, enabling seamless cross-server communication.",
    },
     {
        icon: BsClockHistory,
        title: "Cross-Server Messaging",
        content: "Ari Connect World is a Global Network linking multiple Discord servers, enabling seamless cross-server communication.",
    },
];

export default function FeaturePage(){
    return(
        <section className="w-full flex flex-col items-center justify-center gap-10 p-20">
            <div className={` max-w-[920px] flex flex-col items-center justify-center gap-10 text-white`}>
                <div className=" flex justify-center items-center gap-5">
                    <div className=" w-32 sm:w-52 h-1 bg-pink-300"/>
                    <Heading as='h2' size='xl' >Features</Heading>
                    <div className=" w-32 sm:w-52 h-1 bg-pink-300"/>
                </div>
                <div className=" grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-20">
                
                   {features.map((feature, index)=>(
                        <FeatureCard key={index} 
                            icon={feature.icon} 
                            title={feature.title} 
                            content={feature.content}/>
                    ) )}
                
                </div>
              
            </div>
        </section>
    )
}