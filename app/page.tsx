import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";

import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative bg-[#000] min-h-screen overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar />
        <div className="pt-20">
          <Hero />
          <Grid />
          <Experience />
          <RecentProjects />
          <Footer />
        </div>
      </div>
    </main>
  )
}
