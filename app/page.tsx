"use client";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Loading from "@/components/ui/Loading";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loading />;
  return (
    <main className="relative min-h-screen bg-gradient-to-r from-orange-50 to-violet-50 dark:bg-gradient-to-r dark:from-slate-950 dark:to-gray-950 overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar />
        <div className="">
          <Hero />
          <About />
          <Grid />
          <Experience />
          <RecentProjects />
          <Footer />
        </div>
      </div>
    </main>
  )
}
