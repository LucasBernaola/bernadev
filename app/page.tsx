'use client';

import "./globals.css";
import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero/Hero";
import TechStack from "@/components/TechStack/TechStack";
import Loader from "@/components/ui/Loader/Loader";
import MyProjects from "@/components/MyProjects/MyProjects";
import OtherTools from "@/components/OtherTools/OtherTools";
import Footer from "@/components/Footer/Footer";
import Timeline from "@/components/TimeLine/VerticalTimeline";
import AboutMe from "@/components/AboutMe/AboutMe";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 700); 
    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>
      {loading ? (
        <Loader /> 
      ) : (
        <>
          <Navbar />
          <Hero />
          <TechStack />
          <MyProjects />
          <Timeline />
          <OtherTools />
          <AboutMe />
          <Footer />
        </>
      )}
    </div>
  );
}

