
import  styles from '@/styles/index'
import { Text } from '@chakra-ui/react'

export default function AboutPage(){
    return(
        <section className={` relative text-white pb-20 `}>
            <div className=' flex justify-center'>
                <Text fontSize={"lg"} className='  text-center max-w-2xl font-medium'>
                Ari Connect World is a Global Network linking multiple Discord servers, enabling seamless cross-server communication. Whether youre gaming or chatting, our self-designed bot ensures youre always connected
                </Text>
            </div>
        </section>
    )
}