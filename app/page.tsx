'use client';

import "./globals.css";
import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero/Hero";
import TechStack from "@/components/TechStack/TechStack";
import Loader from "@/components/ui/Loader/Loader";
import MyProjects from "@/components/MyProjects/MyProjects";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000); 
    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>
      {loading ? (
        <Loader /> 
      ) : (
        <>
          <Hero />
          <TechStack />
          <MyProjects />
        </>
      )}
    </div>
  );
}

