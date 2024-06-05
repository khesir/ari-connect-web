import FeaturePage from "@/components/home/sections/feature";
import Footer from "@/components/home/sections/footer";
import HeroPage from "@/components/home/sections/heropage";
import OfferPage from "@/components/home/sections/offer";
import SetupPage from "@/components/home/sections/setup";

import Image from "next/image";
import wave from "../../public/wave.svg"
import AboutPage from "@/components/home/sections/about";
import ContactPage from "@/components/home/sections/contact";

export default function Home() {

  return (
      <main className="bg-white overflow-hidden">
        <HeroPage/>
        <Image
            priority
            height={50}
            src={wave}
            alt="Wave"
            className="pt-10 w-full"
          />
          
        <div className=" bg-[#1A202C]">
          <AboutPage/>
          <FeaturePage/>
          <OfferPage/>
          <SetupPage/>
          <ContactPage/>
          <Footer/>
        </div>
      </main>
  );
}
