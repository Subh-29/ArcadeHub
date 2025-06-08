'use client';

import { useEffect, useState } from "react";
import Card from "@/components/Card";
import Loader from "@/components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    console.log("Loading: ", loading);
    const handleLoad = () => {
      // Wait an extra tiny bit if needed
      setTimeout(() => setLoading(false), 500);
    };

    // Fire when everything (even imgs/fonts) is loaded
    window.addEventListener("load", handleLoad);

    // Lock scroll when loading
    if (loading) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    return () => {
      window.removeEventListener("load", handleLoad);
      setLoading(false);
      document.body.style.overflow = "auto"; // Cleanup just in case
    };
  }, [loading]);
  console.log("Loading: ", loading);
  
  return (
    <>
      {loading && <Loader />}
      <div className={`px-3 py-5 w-full min-h-full text-white transition-opacity duration-500 ${!loading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <Card />
      </div>
    </>
  );
}
