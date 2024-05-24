import FeaturePage from "@/components/home/feature";
import Footer from "@/components/home/footer";
import HeroPage from "@/components/home/heropage";
import Navbar from "@/components/home/navbar";
import ServerStats from "@/components/home/server-stats";
import { Engine } from "@tsparticles/engine";
import Particles from "@tsparticles/react";
import { useCallback } from "react";
import { loadFull } from "tsparticles";

export default function Home() {

  return (
      <div className="flex flex-col gap-20 lg:gap-60  bg-slate-800">
        <Navbar/>
        <HeroPage/>
        <div className="relative bg-white rounded-t-3xl mt-10 border-t-4 border-solid border-pink-300">
          <ServerStats className="relative -top-12" />
          <FeaturePage/>
          <Footer/>
        </div>
      </div>
  );
}
