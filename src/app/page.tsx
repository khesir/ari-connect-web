import FeaturePage from "@/components/home/feature";
import Footer from "@/components/home/footer";
import HeroPage from "@/components/home/heropage";
import Navbar from "@/components/home/navbar";
import ServerStats from "@/components/home/server-stats";


export default function Home() {

  return (
      <main className="flex flex-col  bg-slate-800">
        <Navbar/>
        <HeroPage/>
        <div className="relative bg-white rounded-t-3xl mt-10 border-t-4 border-solid border-pink-300">
          <ServerStats className="relative -top-12" />
          <FeaturePage/>
          <Footer/>
        </div>
      </main>
  );
}
