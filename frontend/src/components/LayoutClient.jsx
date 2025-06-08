"use client";


import { ToastContainer } from "react-toastify";
import Navbar from "@/components/NavBar";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";


export default function RootLayout({ children }) {
   const [loading, setLoading] = useState(true);


  // Handles window load event
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 2000);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);


  return (

      <main className=" 
        bg-blue-950 
      ">
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnHover
            draggable
            theme="dark" />
          {loading && <Loader />}
          {!loading && <Navbar />}
          <div className="mt-4">
          {!loading && children}
          </div>
          {!loading && <Footer />}
        
      </main>

  );
}
